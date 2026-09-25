import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modules } from '../data/modules';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { saveProgress } from '../utils/progress';
import ResultScreen from '../components/ResultScreen';

// Stages: intro → pretest → lessons → posttest → done
const PASSING_SCORE = 80; // percent

export default function Module() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { dark } = useTheme();
  const mod = modules.find((m) => m.id === parseInt(id));
  const [stage, setStage] = useState('intro'); // intro | pretest | lessons | posttest | done
  const [activeLesson, setActiveLesson] = useState(0);
  const [preAnswers, setPreAnswers] = useState({});
  const [postAnswers, setPostAnswers] = useState({});
  const [preSubmitted, setPreSubmitted] = useState(false);
  const [postSubmitted, setPostSubmitted] = useState(false);
  const [postScore, setPostScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const bg = dark ? '#1a1a1a' : '#f5f0eb';
  const cardBg = dark ? '#2a2a2a' : '#fff';
  const text = dark ? '#f0f0f0' : '#2c1810';
  const sub = dark ? '#ccc' : '#555';

  if (!mod) return <div style={{ padding: 40 }}>Module not found.</div>;

  const currentModIndex = modules.findIndex(m => m.id === mod.id);
  const nextMod = currentModIndex < modules.length - 1 ? modules[currentModIndex + 1] : null;

  return (
    <div style={{ ...styles.container, background: bg }}>
      <div style={{ ...styles.header, background: mod.color }}>
        <button style={styles.back} onClick={() => navigate('/dashboard')} aria-label="Back">← Dashboard</button>
        <div style={styles.headerTitle}>{mod.icon} {mod.title}</div>
      </div>

      {/* Stage indicator */}
      <div style={styles.stageBar}>
        {['Intro', 'Pre-Test', 'Lessons', 'Post-Test'].map((s, i) => {
          const stageKeys = ['intro', 'pretest', 'lessons', 'posttest'];
          const current = stageKeys.indexOf(stage);
          return (
            <div key={s} style={{ ...styles.stageStep, background: i <= current ? mod.color : (dark ? '#444' : '#ddd') }}>
              <span style={{ color: i <= current ? '#fff' : (dark ? '#888' : '#999'), fontSize: '12px', fontWeight: '600' }}>{s}</span>
            </div>
          );
        })}
      </div>

      <div style={styles.body}>
        {stage === 'intro' && <Intro mod={mod} dark={dark} cardBg={cardBg} text={text} sub={sub} onNext={() => setStage('pretest')} />}
        {stage === 'pretest' && (
          <QuizPanel
            title="📋 Pre-Test"
            subtitle="Answer these questions before starting the lessons. Don't worry — this is just to check your prior knowledge."
            questions={mod.preTest}
            answers={preAnswers}
            setAnswers={setPreAnswers}
            submitted={preSubmitted}
            onSubmit={() => setPreSubmitted(true)}
            onNext={() => setStage('lessons')}
            nextLabel="Start Lessons →"
            mod={mod} dark={dark} cardBg={cardBg} text={text} sub={sub}
            showScore={false}
          />
        )}
        {stage === 'lessons' && (
          <LessonsPanel
            mod={mod} dark={dark} cardBg={cardBg} text={text} sub={sub}
            activeLesson={activeLesson} setActiveLesson={setActiveLesson}
            onNext={() => setStage('posttest')}
          />
        )}
        {stage === 'posttest' && (
          <QuizPanel
            title="✅ Post-Test"
            subtitle="You've completed the lessons. Now test what you've learned!"
            questions={mod.postTest}
            answers={postAnswers}
            setAnswers={setPostAnswers}
            submitted={postSubmitted}
            showResult={showResult}
            onSubmit={async () => {
              const score = mod.postTest.filter((q) => postAnswers[q.id] === q.correct).length;
              setPostScore(score);
              setPostSubmitted(true);
              setShowResult(true);
              try {
                await saveProgress(currentUser?.uid, mod.id, score, mod.postTest.length);
              } catch (e) {
                console.error('Save progress failed:', e);
              }
            }}
            onNext={() => navigate('/dashboard')}
            onRetry={() => {
              setPostSubmitted(false);
              setPostAnswers({});
              setShowResult(false);
              setStage('lessons');
              setActiveLesson(0);
            }}
            onNextModule={() => {
              setShowResult(false);
              if (nextMod) navigate(`/module/${nextMod.id}`);
              else navigate('/dashboard');
            }}
            nextLabel="Back to Dashboard"
            mod={mod} dark={dark} cardBg={cardBg} text={text} sub={sub}
            showScore={true} score={postScore}
            postScore={postScore}
            postTotal={mod.postTest.length}
            nextMod={nextMod}
          />
        )}
      </div>
    </div>
  );
}

function Intro({ mod, dark, cardBg, text, sub, onNext }) {
  return (
    <div style={{ ...styles.card, background: cardBg }}>
      <div style={{ fontSize: '48px', marginBottom: '12px' }}>{mod.icon}</div>
      <h2 style={{ ...styles.lessonTitle, color: text }}>{mod.title}</h2>
      <div style={{ ...styles.introBadge, background: mod.color }}>Lesson Introduction</div>
      <div style={styles.introText}>
        {mod.intro.split('\n\n').map((p, i) => (
          <p key={i} style={{ color: sub, fontSize: '15px', lineHeight: 1.8, marginBottom: '14px' }}>{p}</p>
        ))}
      </div>
      <button style={{ ...styles.btn, background: mod.color }} onClick={onNext}>
        Take Pre-Test →
      </button>
    </div>
  );
}

function LessonsPanel({ mod, dark, cardBg, text, sub, activeLesson, setActiveLesson, onNext }) {
  return (
    <div>
      <div style={styles.tabs}>
        {mod.lessons.map((lesson, i) => (
          <button key={lesson.id}
            style={i === activeLesson
              ? { ...styles.tab, background: mod.color, color: '#fff', borderColor: mod.color }
              : { ...styles.tab, background: cardBg, color: text }}
            onClick={() => setActiveLesson(i)}>
            {i + 1}. {lesson.title}
          </button>
        ))}
      </div>
      <div style={{ ...styles.card, background: cardBg }}>
        <h2 style={{ ...styles.lessonTitle, color: text }}>{mod.lessons[activeLesson].title}</h2>
        <div style={styles.videoWrap}>
          <iframe style={styles.video}
            src={mod.lessons[activeLesson].videoUrl}
            title={mod.lessons[activeLesson].videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>
        <div>
          {mod.lessons[activeLesson].content.split('\n\n').map((para, i) => (
            <p key={i} style={{ color: sub, fontSize: '15px', lineHeight: 1.7, marginBottom: '14px' }}
              dangerouslySetInnerHTML={{
                __html: para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>')
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
              onClick={onNext}>Take Post-Test →</button>
          )}
        </div>
      </div>
    </div>
  );
}

function QuizPanel({ title, subtitle, questions, answers, setAnswers, submitted, onSubmit, onNext, onRetry, onNextModule, nextLabel, mod, dark, cardBg, text, sub, showScore, score, showResult, postScore, postTotal, nextMod }) {
  const correctCount = questions.filter((q) => answers[q.id] === q.correct).length;
  const percent = Math.round((correctCount / questions.length) * 100);

  return (
    <div style={{ ...styles.card, background: cardBg }}>
      <h2 style={{ ...styles.lessonTitle, color: text }}>{title}</h2>
      <p style={{ color: sub, fontSize: '14px', marginBottom: '20px', lineHeight: 1.6 }}>{subtitle}</p>

      {submitted && !showScore && (
        <div style={{ ...styles.resultBox, background: '#dbeafe' }}>
          <div style={{ fontSize: '16px', color: '#1e40af', fontWeight: '600' }}>
            ✅ Pre-test recorded! You answered {correctCount}/{questions.length} correctly.
            <br />Now let's learn — proceed to the lessons.
          </div>
        </div>
      )}

      {questions.map((q, qi) => (
        <div key={q.id} style={styles.qBlock}>
          <p style={{ fontWeight: '600', fontSize: '15px', color: text, marginBottom: '10px' }}>
            {qi + 1}. {q.question}
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
                onClick={() => !submitted && setAnswers((prev) => ({ ...prev, [q.id]: oi }))}
                aria-label={`Option ${oi + 1}`}>
                <span style={styles.optLetter}>{['A','B','C','D'][oi]}</span>
                {opt}
              </button>
            );
          })}
        </div>
      ))}

      <div style={styles.navRow}>
        {!submitted ? (
          <button style={{ ...styles.btn, background: mod.color, marginLeft: 'auto' }}
            onClick={() => {
              if (Object.keys(answers).length < questions.length) {
                const unanswered = questions.length - Object.keys(answers).length;
                alert(`Please answer all questions. You have ${unanswered} question(s) remaining.`);
                return;
              }
              onSubmit();
            }}>
            Submit ({Object.keys(answers).length}/{questions.length} answered)
          </button>
        ) : !showScore ? (
          <button style={{ ...styles.btn, background: '#22c55e', marginLeft: 'auto' }} onClick={onNext}>
            {nextLabel}
          </button>
        ) : null}
      </div>

      {/* Animated result appears inline at bottom after submit */}
      {showResult && showScore && (
        <ResultScreen
          score={postScore}
          total={postTotal}
          modColor={mod.color}
          modId={mod.id}
          modules={[]}
          onRetry={onRetry}
          onNext={onNextModule}
          nextMod={nextMod}
        />
      )}
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', fontFamily: 'system-ui, sans-serif' },
  header: { color: '#fff', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '14px', position: 'sticky', top: 0, zIndex: 10 },
  back: { background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' },
  headerTitle: { fontSize: '17px', fontWeight: '700' },
  stageBar: { display: 'flex', gap: '4px', padding: '12px 16px', overflowX: 'auto' },
  stageStep: { flex: 1, padding: '8px 4px', borderRadius: '8px', textAlign: 'center', minWidth: '70px' },
  body: { padding: '12px 16px 40px', maxWidth: '800px', margin: '0 auto' },
  card: { borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '16px' },
  lessonTitle: { fontSize: '20px', fontWeight: '700', marginBottom: '12px' },
  introBadge: { display: 'inline-block', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', marginBottom: '16px' },
  introText: { marginBottom: '24px' },
  btn: { padding: '13px 24px', borderRadius: '10px', border: 'none', color: '#fff', fontSize: '15px', fontWeight: '600', cursor: 'pointer', display: 'block', width: '100%' },
  tabs: { display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' },
  tab: { padding: '9px 14px', borderRadius: '8px', border: '1.5px solid #ddd', cursor: 'pointer', fontSize: '13px', fontWeight: '500' },
  videoWrap: { position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: '22px', borderRadius: '12px', overflow: 'hidden' },
  video: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' },
  navRow: { display: 'flex', marginTop: '22px', gap: '10px' },
  navBtn: { padding: '12px 18px', borderRadius: '10px', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '14px' },
  qBlock: { marginBottom: '22px' },
  optBtn: { display: 'flex', alignItems: 'center', gap: '10px', width: '100%', textAlign: 'left', padding: '12px 14px', borderRadius: '8px', border: '1.5px solid', marginBottom: '8px', cursor: 'pointer', fontSize: '14px' },
  optLetter: { width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', flexShrink: 0 },
  resultBox: { padding: '20px', borderRadius: '12px', textAlign: 'center', marginBottom: '22px' },
  resultScore: { fontSize: '44px', fontWeight: '700', color: '#2c1810' },
};
