import { useState } from 'react';
import ResultScreen from './ResultScreen';

const ITEMS_PER_PAGE = 5;

export default function PagedQuizPanel({
  title, subtitle, questions, mod, dark, cardBg, text, sub,
  onSubmit, onNext, onRetry, showResult, postScore, postTotal, isPreTest
}) {
  const [answers, setAnswers] = useState({});
  const [page, setPage] = useState(0); // 0-indexed
  const [submitted, setSubmitted] = useState(false);

  const totalPages = Math.ceil(questions.length / ITEMS_PER_PAGE);
  const pageQuestions = questions.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);
  const answeredOnPage = pageQuestions.filter(q => answers[q.id] !== undefined).length;
  const totalAnswered = Object.keys(answers).length;

  function handleSelect(qId, oi) {
    if (!submitted) setAnswers(prev => ({ ...prev, [qId]: oi }));
  }

  function handleNext() {
    // Check all on current page are answered
    const unanswered = pageQuestions.filter(q => answers[q.id] === undefined).length;
    if (unanswered > 0) {
      alert(`Please answer all ${unanswered} remaining question(s) on this page before continuing.`);
      return;
    }
    if (page < totalPages - 1) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleBack() {
    if (page > 0) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleSubmit() {
    const unanswered = questions.length - totalAnswered;
    if (unanswered > 0) {
      alert(`Please answer all questions. You have ${unanswered} question(s) remaining.`);
      return;
    }
    setSubmitted(true);
    onSubmit(answers);
  }

  const isLastPage = page === totalPages - 1;

  return (
    <div style={{ ...styles.card, background: cardBg }}>
      {/* Header */}
      <h2 style={{ ...styles.title, color: text }}>{title}</h2>
      <p style={{ color: sub, fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>{subtitle}</p>

      {/* Page indicator */}
      <div style={styles.pageIndicator}>
        {Array.from({ length: totalPages }, (_, i) => (
          <div key={i} style={{
            ...styles.pageDot,
            background: i === page ? mod.color : i < page ? '#22c55e' : (dark ? '#444' : '#ddd'),
          }} />
        ))}
        <span style={{ color: sub, fontSize: '13px', marginLeft: '10px' }}>
          Page {page + 1} of {totalPages}
        </span>
      </div>

      {/* Progress bar */}
      <div style={styles.progressWrap}>
        <div style={{
          ...styles.progressFill,
          width: `${(totalAnswered / questions.length) * 100}%`,
          background: mod.color,
        }} />
      </div>
      <p style={{ color: sub, fontSize: '12px', marginBottom: '20px' }}>
        {totalAnswered}/{questions.length} answered
      </p>

      {/* Questions for current page */}
      {pageQuestions.map((q, qi) => {
        const globalIndex = page * ITEMS_PER_PAGE + qi;
        return (
          <div key={q.id} style={styles.qBlock}>
            <p style={{ fontWeight: '600', fontSize: '15px', color: text, marginBottom: '10px' }}>
              {globalIndex + 1}. {q.question}
            </p>
            {q.options.map((opt, oi) => {
              let bg = dark ? '#333' : '#f9f9f9';
              let border = dark ? '#555' : '#e0e0e0';
              if (submitted) {
                if (oi === q.correct) { bg = '#dcfce7'; border = '#22c55e'; }
                else if (answers[q.id] === oi) { bg = '#fee2e2'; border = '#ef4444'; }
              } else if (answers[q.id] === oi) {
                bg = dark ? '#1e3a5f' : '#dbeafe'; border = '#3b82f6';
              }
              return (
                <button key={oi}
                  style={{ ...styles.optBtn, background: bg, borderColor: border, color: text }}
                  onClick={() => handleSelect(q.id, oi)}
                  aria-label={`Option ${oi + 1}: ${opt}`}>
                  <span style={styles.optLetter}>{['A', 'B', 'C', 'D'][oi]}</span>
                  {opt}
                </button>
              );
            })}
          </div>
        );
      })}

      {/* Navigation buttons */}
      <div style={styles.navRow}>
        {page > 0 && (
          <button style={{ ...styles.navBtn, background: dark ? '#444' : '#e0d8d0', color: text }}
            onClick={handleBack} disabled={submitted} aria-label="Previous page">
            ← Previous
          </button>
        )}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
          {!isLastPage ? (
            <button style={{ ...styles.navBtn, background: mod.color, color: '#fff' }}
              onClick={handleNext} aria-label="Next page">
              Next → ({answeredOnPage}/{pageQuestions.length} on this page)
            </button>
          ) : !submitted ? (
            <button style={{ ...styles.navBtn, background: mod.color, color: '#fff' }}
              onClick={handleSubmit} aria-label="Submit pretest">
              Submit ({totalAnswered}/{questions.length} answered)
            </button>
          ) : null}
        </div>
      </div>

      {/* Animated result at bottom */}
      {showResult && (
        <ResultScreen
          score={postScore}
          total={postTotal}
          modColor={mod.color}
          modId={mod.id}
          modules={[]}
          isPreTest={isPreTest}
          onRetry={() => {
            setAnswers({});
            setPage(0);
            setSubmitted(false);
            onRetry();
          }}
          onNext={onNext}
        />
      )}
    </div>
  );
}

const styles = {
  card: { borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '16px' },
  title: { fontSize: '20px', fontWeight: '700', marginBottom: '8px' },
  pageIndicator: { display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' },
  pageDot: { width: '12px', height: '12px', borderRadius: '50%', transition: 'background 0.3s' },
  progressWrap: { height: '6px', background: '#e0e0e0', borderRadius: '3px', overflow: 'hidden', marginBottom: '4px' },
  progressFill: { height: '6px', borderRadius: '3px', transition: 'width 0.4s ease' },
  qBlock: { marginBottom: '24px' },
  optBtn: {
    display: 'flex', alignItems: 'center', gap: '10px', width: '100%', textAlign: 'left',
    padding: '12px 14px', borderRadius: '8px', border: '1.5px solid',
    marginBottom: '8px', cursor: 'pointer', fontSize: '14px',
  },
  optLetter: {
    width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0,0,0,0.08)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '12px', fontWeight: '700', flexShrink: 0,
  },
  navRow: { display: 'flex', marginTop: '16px', gap: '10px', alignItems: 'center' },
  navBtn: { padding: '12px 18px', borderRadius: '10px', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '14px' },
};
