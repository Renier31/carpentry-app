import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modules } from '../data/modules';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { saveProgress } from '../utils/progress';

export default function Module() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { dark } = useTheme();
  const mod = modules.find((m) => m.id === parseInt(id));
  const [activeLesson, setActiveLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);

  const bg = dark ? '#1a1a1a' : '#f5f0eb';
  const cardBg = dark ? '#2a2a2a' : '#fff';
  const text = dark ? '#f0f0f0' : '#2c1810';
  const sub = dark ? '#ccc' : '#333';

  if (!mod) return <div style={{ padding: 40 }}>Module not found.</div>;

  return (
    <div style={{ ...styles.container, background: bg }}>
      <div style={{ ...styles.header, background: mod.color }}>
        <button style={styles.back} onClick={() => navigate('/dashboard')} aria-label="Back">← Dashboard</button>
        <div style={styles.headerTitle}>{mod.icon} {mod.title}</div>
      </div>

      {!showQuiz ? (
        <div style={styles.body}>
          <div style={styles.tabs}>
            {mod.lessons.map((lesson, i) => (
              <button key={lesson.id}
                style={i === activeLesson
                  ? { ...styles.tab, background: mod.color, color: '#fff', borderColor: mod.color }
                  : { ...styles.tab, background: cardBg, color: text }}
                onClick={() => setActiveLesson(i)}
                aria-label={`Lesson ${i + 1}`}>
                {i + 1}. {lesson.title}
              </button>
            ))}
          </div>

          <div style={{ ...styles.lessonBox, background: cardBg }}>
            <h2 style={{ ...styles.lessonTitle, color: text }}>{mod.lessons[activeLesson].title}</h2>
            <div style={styles.videoWrap}>
              <iframe style={styles.video}
                src={mod.lessons[activeLesson].videoUrl}
                title={mod.lessons[activeLesson].videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            </div>
            <div style={styles.content}>
              {mod.lessons[activeLesson].content.split('\n\n').map((para, i) => (
                <p key={i} style={{ ...styles.para, color: sub }}
                  dangerouslySetInnerHTML={{
                    __html: para
                      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n/g, '<br/>')
                  }} />
              ))}
            </div>
            <div style={styles.navRow}>
              {activeLesson > 0 && (
                <button style={{ ...styles.navBtn, background: dark ? '#444' : '#e0d8d0', color: text }}
                  onClick={() => setActiveLesson(activeLesson - 1)}>← Previous</button>
              )}
              {activeLesson < mod.lessons.length - 1 ? (
                <button style={{ ...styles.navBtn, marginLeft: 'auto', background: mod.color, color: '#fff' }}
                  onClick={() => setActiveLesson(activeLesson + 1)}>Next Lesson →</button>
              ) : (
                <button style={{ ...styles.navBtn, marginLeft: 'auto', background: '#22c55e', color: '#fff' }}
                  onClick={() => setShowQuiz(true)}>Take Quiz →</button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Quiz mod={mod} currentUser={currentUser} dark={dark} cardBg={cardBg} text={text}
          onBack={() => setShowQuiz(false)} />
      )}
    </div>
  );
}

function Quiz({ mod, currentUser, dark, cardBg, text, onBack }) {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);

  function handleSelect(qId, idx) {
    if (!submitted) setAnswers((prev) => ({ ...prev, [qId]: idx }));
  }

  async function handleSubmit() {
    if (Object.keys(answers).length < mod.quiz.length) {
      alert('Please answer all questions before submitting.');
      return;
    }
    const score = mod.quiz.filter((q) => answers[q.id] === q.correct).length;
    setSaving(true);
    await saveProgress(currentUser?.uid, mod.id, score, mod.quiz.length);
    setSaving(false);
    setSubmitted(true);
  }

  const score = mod.quiz.filter((q) => answers[q.id] === q.correct).length;
  const percent = Math.round((score / mod.quiz.length) * 100);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ ...styles.lessonBox, background: cardBg }}>
        <h2 style={{ ...styles.lessonTitle, color: text }}>📝 Quiz: {mod.title}</h2>

        {submitted && (
          <div style={{
            ...styles.resultBox,
            background: percent === 100 ? '#dcfce7' : percent >= 50 ? '#fef9c3' : '#fee2e2'
          }}>
            <div style={styles.resultScore}>{score}/{mod.quiz.length}</div>
            <div style={styles.resultPercent}>{percent}%</div>
            <div style={styles.resultMsg}>
              {percent === 100 ? '🎉 Perfect score! Outstanding work!'
                : percent >= 70 ? '👍 Great job! Keep it up!'
                : percent >= 50 ? '📚 Good effort! Review the lessons and try again.'
                : '💪 Keep studying — you\'ve got this!'}
            </div>
          </div>
        )}

        {mod.quiz.map((q, qi) => (
          <div key={q.id} style={styles.qBlock}>
            <p style={{ ...styles.qText, color: text }}>{qi + 1}. {q.question}</p>
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
        ))}

        <div style={styles.navRow}>
          <button style={{ ...styles.navBtn, background: dark ? '#444' : '#e0d8d0', color: text }}
            onClick={onBack}>← Back to Lessons</button>
          {!submitted ? (
            <button style={{ ...styles.navBtn, marginLeft: 'auto', background: '#22c55e', color: '#fff' }}
              onClick={handleSubmit} disabled={saving}>
              {saving ? 'Saving...' : 'Submit Quiz'}
            </button>
          ) : (
            <button style={{ ...styles.navBtn, marginLeft: 'auto', background: '#8B4513', color: '#fff' }}
              onClick={() => navigate('/dashboard')}>
              Back to Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', fontFamily: 'system-ui, sans-serif' },
  header: {
    color: '#fff', padding: '14px 16px',
    display: 'flex', alignItems: 'center', gap: '14px',
    position: 'sticky', top: 0, zIndex: 10,
  },
  back: {
    background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)',
    color: '#fff', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px',
  },
  headerTitle: { fontSize: '17px', fontWeight: '700' },
  body: { padding: '16px', maxWidth: '800px', margin: '0 auto' },
  tabs: { display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' },
  tab: {
    padding: '9px 14px', borderRadius: '8px', border: '1.5px solid #ddd',
    cursor: 'pointer', fontSize: '13px', fontWeight: '500',
  },
  lessonBox: { borderRadius: '16px', padding: '22px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
  lessonTitle: { fontSize: '20px', fontWeight: '700', marginBottom: '18px' },
  videoWrap: { position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: '22px', borderRadius: '12px', overflow: 'hidden' },
  video: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' },
  content: { lineHeight: 1.7 },
  para: { marginBottom: '14px', fontSize: '15px' },
  navRow: { display: 'flex', marginTop: '22px', gap: '10px' },
  navBtn: { padding: '12px 18px', borderRadius: '10px', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '14px' },
  qBlock: { marginBottom: '22px' },
  qText: { fontWeight: '600', fontSize: '15px', marginBottom: '10px' },
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
  resultBox: { padding: '20px', borderRadius: '12px', textAlign: 'center', marginBottom: '22px' },
  resultScore: { fontSize: '44px', fontWeight: '700', color: '#2c1810' },
  resultPercent: { fontSize: '22px', fontWeight: '600', color: '#555', marginTop: '4px' },
  resultMsg: { fontSize: '16px', marginTop: '8px', color: '#444' },
};
