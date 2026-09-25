import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const PASSING_SCORE = 80;

// Confetti particle component
function Confetti({ active }) {
  const colors = ['#f59e0b', '#22c55e', '#3b82f6', '#ec4899', '#8b5cf6', '#ef4444', '#06b6d4'];
  const pieces = Array.from({ length: 60 }, (_, i) => i);

  if (!active) return null;

  return (
    <div style={styles.confettiWrap} aria-hidden="true">
      {pieces.map((i) => {
        const color = colors[i % colors.length];
        const left = Math.random() * 100;
        const delay = Math.random() * 1.5;
        const duration = 2 + Math.random() * 2;
        const size = 8 + Math.random() * 10;
        const rotate = Math.random() * 360;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: `${left}%`,
            top: '-20px',
            width: `${size}px`,
            height: `${size}px`,
            background: color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            animation: `confettiFall ${duration}s ${delay}s ease-in forwards`,
            transform: `rotate(${rotate}deg)`,
          }} />
        );
      })}
    </div>
  );
}

// Animated emoji that bounces
function BounceEmoji({ emoji, passed }) {
  return (
    <div style={{
      fontSize: '80px',
      animation: passed ? 'bounceIn 0.6s ease' : 'shakeX 0.6s ease',
      display: 'inline-block',
      marginBottom: '12px',
    }}>
      {emoji}
    </div>
  );
}

// Score counter animation
function AnimatedScore({ target, total }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 20);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(start);
      }
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

// Animated percent bar
function ScoreBar({ percent, passed }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setTimeout(() => setWidth(percent), 300);
  }, [percent]);
  return (
    <div style={styles.barWrap}>
      <div style={{
        ...styles.barFill,
        width: `${width}%`,
        background: percent >= 95 ? '#7c3aed' : passed ? '#22c55e' : '#ef4444',
        transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
      }} />
    </div>
  );
}

export default function ResultScreen({ score, total, onRetry, onNext, modColor, modId, modules }) {
  const navigate = useNavigate();
  const percent = Math.round((score / total) * 100);
  const passed = percent >= PASSING_SCORE;
  const [show, setShow] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
    if (passed) setTimeout(() => setShowConfetti(true), 400);
    setTimeout(() => setShowConfetti(false), 4000);
  }, [passed]);

  const getBadge = () => {
    if (percent >= 95) return { label: '🏆 OUTSTANDING!', bg: '#7c3aed', text: 'Absolutely perfect! You mastered this module!' };
    if (percent >= 80) return { label: '🎉 EXCELLENT!', bg: '#22c55e', text: 'Great work! You passed and unlocked the next module!' };
    return { label: '❌ NOT PASSED', bg: '#ef4444', text: `You need ${PASSING_SCORE}% to pass. Review the lessons and try again!` };
  };

  const badge = getBadge();
  const emoji = percent >= 95 ? '🏆' : passed ? '🎉' : '😔';

  // Find next module
  const currentIndex = modules ? modules.findIndex(m => m.id === modId) : -1;
  const nextMod = modules && currentIndex >= 0 && currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  return (
    <div style={{
      ...styles.overlay,
      opacity: show ? 1 : 0,
      transform: show ? 'scale(1)' : 'scale(0.8)',
      transition: 'opacity 0.4s ease, transform 0.4s ease',
    }}>
      <Confetti active={showConfetti} />

      <div style={styles.card}>
        <BounceEmoji emoji={emoji} passed={passed} />

        <div style={{
          ...styles.badgePill,
          background: badge.bg,
          animation: 'popIn 0.5s 0.3s ease both',
        }}>
          {badge.label}
        </div>

        <AnimatedScore target={score} total={total} />

        <div style={{ fontSize: '32px', fontWeight: '800', color: badge.bg, margin: '4px 0 8px',
          animation: 'popIn 0.5s 0.5s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          {percent}%
        </div>

        <ScoreBar percent={percent} passed={passed} />

        <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.6, margin: '16px 0 24px', textAlign: 'center' }}>
          {badge.text}
        </p>

        {/* Stars */}
        <div style={{ fontSize: '28px', marginBottom: '20px', animation: 'popIn 0.5s 0.7s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          {percent >= 80 ? '⭐⭐⭐' : percent >= 60 ? '⭐⭐' : '⭐'}
        </div>

        {/* Buttons */}
        <div style={styles.btnRow}>
          <button style={{ ...styles.btn, background: '#6b7280' }} onClick={onRetry} aria-label="Retry module">
            🔄 Retry
          </button>
          {passed && nextMod && (
            <button style={{ ...styles.btn, background: modColor, animation: 'pulseBtn 1.5s infinite' }}
              onClick={onNext} aria-label="Next module">
              Next Module →
            </button>
          )}
          <button style={{ ...styles.btn, background: '#2c1810' }}
            onClick={() => navigate('/dashboard')} aria-label="Dashboard">
            🏠 Dashboard
          </button>
        </div>
      </div>

      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.15); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shakeX {
          0%, 100% { transform: translateX(0); }
          15% { transform: translateX(-12px) rotate(-5deg); }
          30% { transform: translateX(12px) rotate(5deg); }
          45% { transform: translateX(-10px) rotate(-3deg); }
          60% { transform: translateX(10px) rotate(3deg); }
          75% { transform: translateX(-6px); }
          90% { transform: translateX(6px); }
        }
        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          80% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes pulseBtn {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(139,69,19,0.4); }
          50% { transform: scale(1.04); box-shadow: 0 0 0 8px rgba(139,69,19,0); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.85)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 1000, padding: '20px',
  },
  confettiWrap: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    pointerEvents: 'none', overflow: 'hidden', zIndex: 999,
  },
  card: {
    background: '#fff', borderRadius: '24px', padding: '36px 28px',
    maxWidth: '420px', width: '100%', textAlign: 'center',
    boxShadow: '0 25px 80px rgba(0,0,0,0.4)',
    position: 'relative', zIndex: 1001,
  },
  badgePill: {
    display: 'inline-block', color: '#fff', padding: '8px 22px',
    borderRadius: '30px', fontWeight: '800', fontSize: '16px', marginBottom: '16px',
  },
  scoreCounter: { margin: '8px 0 4px', lineHeight: 1 },
  scoreNum: { fontSize: '56px', fontWeight: '900', color: '#2c1810' },
  scoreTotal: { fontSize: '28px', fontWeight: '600', color: '#aaa' },
  barWrap: {
    height: '14px', background: '#f0f0f0', borderRadius: '7px',
    overflow: 'hidden', margin: '8px 0',
  },
  barFill: { height: '14px', borderRadius: '7px' },
  btnRow: { display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' },
  btn: {
    color: '#fff', border: 'none', padding: '12px 18px',
    borderRadius: '12px', fontSize: '14px', fontWeight: '700',
    cursor: 'pointer', minWidth: '100px',
  },
};
