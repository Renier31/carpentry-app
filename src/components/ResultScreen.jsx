import { useEffect, useState, useRef } from 'react';

const PASSING_SCORE = 80;

// Confetti that appears at the top of the page
function Confetti({ active }) {
  const colors = ['#f59e0b', '#22c55e', '#3b82f6', '#ec4899', '#8b5cf6', '#ef4444', '#06b6d4'];
  if (!active) return null;
  return (
    <div style={styles.confettiWrap} aria-hidden="true">
      {Array.from({ length: 60 }, (_, i) => {
        const color = colors[i % colors.length];
        return (
          <div key={i} style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: '-20px',
            width: `${8 + Math.random() * 10}px`,
            height: `${8 + Math.random() * 10}px`,
            background: color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            animation: `confettiFall ${2 + Math.random() * 2}s ${Math.random() * 1.5}s ease-in forwards`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }} />
        );
      })}
    </div>
  );
}

// Animated score counter
function AnimatedScore({ target, total }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.ceil(target / 20));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCurrent(target); clearInterval(timer); }
      else setCurrent(start);
    }, 50);
    return () => clearInterval(timer);
  }, [target]);
  return (
    <div style={styles.scoreCounter}>
      <span style={styles.scoreNum}>{current}</span>
      <span style={styles.scoreTotal}>/{total}</span>
    </div>
  );
}

// Animated progress bar
function ScoreBar({ percent, passed }) {
  const [width, setWidth] = useState(0);
  useEffect(() => { setTimeout(() => setWidth(percent), 400); }, [percent]);
  return (
    <div style={styles.barWrap}>
      <div style={{
        ...styles.barFill,
        width: `${width}%`,
        background: percent >= 95 ? '#7c3aed' : passed ? '#22c55e' : '#ef4444',
        transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
      }} />
    </div>
  );
}

export default function ResultScreen({ score, total, onRetry, onNext, modColor, modId, modules }) {
  const percent = Math.round((score / total) * 100);
  const passed = percent >= PASSING_SCORE;
  const [visible, setVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Animate in
    setTimeout(() => setVisible(true), 50);
    // Scroll to result
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
    // Confetti for pass
    if (passed) {
      setTimeout(() => setShowConfetti(true), 500);
      setTimeout(() => setShowConfetti(false), 4500);
    }
  }, [passed]);

  const getBadge = () => {
    if (percent >= 95) return { label: '🏆 OUTSTANDING!', bg: '#7c3aed', msg: 'Absolutely perfect! You have mastered this module!' };
    if (percent >= 80) return { label: '🎉 EXCELLENT!', bg: '#22c55e', msg: 'Great work! You passed and unlocked the next module!' };
    return { label: '❌ NOT PASSED', bg: '#ef4444', msg: `You need ${PASSING_SCORE}% to pass. Review the lessons and try again!` };
  };

  const badge = getBadge();
  const emoji = percent >= 95 ? '🏆' : passed ? '🎉' : '😔';
  const stars = percent >= 80 ? '⭐⭐⭐' : percent >= 60 ? '⭐⭐' : '⭐';

  const currentIndex = modules ? modules.findIndex(m => m.id === modId) : -1;
  const nextMod = modules && currentIndex >= 0 && currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  return (
    <>
      <Confetti active={showConfetti} />

      <div ref={ref} style={{
        ...styles.resultBox,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        border: `3px solid ${badge.bg}`,
      }}>

        {/* Emoji */}
        <div style={{
          fontSize: '72px',
          animation: passed ? 'bounceIn 0.7s ease' : 'shakeX 0.7s ease',
          display: 'inline-block',
          marginBottom: '12px',
        }}>
          {emoji}
        </div>

        {/* Badge */}
        <div style={{
          ...styles.badgePill, background: badge.bg,
          animation: 'popIn 0.5s 0.3s ease both',
        }}>
          {badge.label}
        </div>

        {/* Score counter */}
        <AnimatedScore target={score} total={total} />

        {/* Percent */}
        <div style={{
          fontSize: '30px', fontWeight: '800', color: badge.bg, margin: '4px 0 8px',
          animation: 'popIn 0.5s 0.5s ease both',
        }}>
          {percent}%
        </div>

        {/* Progress bar */}
        <ScoreBar percent={percent} passed={passed} />

        {/* Stars */}
        <div style={{
          fontSize: '28px', margin: '12px 0',
          animation: 'popIn 0.5s 0.7s ease both',
        }}>
          {stars}
        </div>

        {/* Message */}
        <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.6, margin: '0 0 20px', textAlign: 'center' }}>
          {badge.msg}
        </p>

        {/* Buttons */}
        <div style={styles.btnRow}>
          <button style={{ ...styles.btn, background: '#6b7280' }} onClick={onRetry} aria-label="Retry module">
            🔄 Retry
          </button>
          {passed && nextMod && (
            <button
              style={{ ...styles.btn, background: modColor, animation: 'pulseBtn 1.5s infinite' }}
              onClick={onNext}
              aria-label="Go to next module"
            >
              Next Module →
            </button>
          )}
          <button style={{ ...styles.btn, background: '#2c1810' }} onClick={() => window.location.href = '/dashboard'} aria-label="Dashboard">
            🏠 Dashboard
          </button>
        </div>
      </div>

      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.2); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shakeX {
          0%,100% { transform: translateX(0); }
          15% { transform: translateX(-14px) rotate(-5deg); }
          30% { transform: translateX(14px) rotate(5deg); }
          45% { transform: translateX(-10px) rotate(-3deg); }
          60% { transform: translateX(10px) rotate(3deg); }
          75% { transform: translateX(-6px); }
          90% { transform: translateX(6px); }
        }
        @keyframes popIn {
          0% { transform: scale(0.4); opacity: 0; }
          80% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes pulseBtn {
          0%,100% { box-shadow: 0 0 0 0 rgba(139,69,19,0.5); }
          50% { box-shadow: 0 0 0 10px rgba(139,69,19,0); }
        }
      `}</style>
    </>
  );
}

const styles = {
  confettiWrap: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    pointerEvents: 'none', overflow: 'hidden', zIndex: 9999,
  },
  resultBox: {
    background: '#fff', borderRadius: '20px', padding: '32px 24px',
    textAlign: 'center', marginTop: '24px',
    boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
  },
  badgePill: {
    display: 'inline-block', color: '#fff', padding: '8px 22px',
    borderRadius: '30px', fontWeight: '800', fontSize: '16px', marginBottom: '14px',
  },
  scoreCounter: { lineHeight: 1, margin: '8px 0 4px' },
  scoreNum: { fontSize: '52px', fontWeight: '900', color: '#2c1810' },
  scoreTotal: { fontSize: '26px', fontWeight: '600', color: '#aaa' },
  barWrap: { height: '14px', background: '#f0f0f0', borderRadius: '7px', overflow: 'hidden', margin: '8px 0' },
  barFill: { height: '14px', borderRadius: '7px' },
  btnRow: { display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' },
  btn: {
    color: '#fff', border: 'none', padding: '12px 18px',
    borderRadius: '12px', fontSize: '14px', fontWeight: '700',
    cursor: 'pointer', minWidth: '100px',
  },
};
