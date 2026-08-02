import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { modules } from '../data/modules';
import { getUserProgress } from '../utils/progress';

export default function Dashboard() {
  const { currentUser, logout, userIsAdmin } = useAuth();
  const { dark, setDark } = useTheme();
  const navigate = useNavigate();
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);

  const bg = dark ? '#1a1a1a' : '#f5f0eb';
  const cardBg = dark ? '#2a2a2a' : '#fff';
  const text = dark ? '#f0f0f0' : '#2c1810';
  const sub = dark ? '#aaa' : '#666';

  useEffect(() => {
    if (currentUser) {
      getUserProgress(currentUser.uid).then((p) => { setProgress(p); setLoading(false); });
    }
  }, [currentUser]);

  const completedCount = Object.keys(progress).length;
  const allDone = completedCount === modules.length;

  async function handleLogout() {
    await logout();
    navigate('/login');
  }

  return (
    <div style={{ ...styles.container, background: bg }}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <div style={styles.logo}>🪚 Compass</div>
          <div style={styles.welcome}>Welcome, {currentUser?.displayName || 'Student'}</div>
        </div>
        <div style={styles.headerRight}>
          <button style={styles.iconBtn} onClick={() => setDark(!dark)} aria-label="Toggle dark mode" title="Toggle dark mode">
            {dark ? '☀️' : '🌙'}
          </button>
          <button style={styles.iconBtn} onClick={() => navigate('/profile')} aria-label="Profile">👤</button>
          <button style={styles.iconBtn} onClick={() => navigate('/leaderboard')} aria-label="Leaderboard">🏆</button>
          <button style={styles.logoutBtn} onClick={handleLogout}>Sign Out</button>
        </div>
      </div>

      {/* Hero */}
      <div style={styles.hero}>
        <h2 style={styles.heroTitle}>Your Carpentry Journey</h2>
        <p style={styles.heroSub}>
          {loading ? 'Loading progress...' : `${completedCount} of ${modules.length} modules completed`}
        </p>
        {/* Progress Bar */}
        <div style={styles.progressBarWrap}>
          <div style={{ ...styles.progressBar, width: `${(completedCount / modules.length) * 100}%` }} />
        </div>
      </div>

      {/* Certificate Banner */}
      {allDone && (
        <div style={styles.certBanner} onClick={() => navigate('/certificate')} role="button" tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/certificate')} aria-label="View certificate">
          🎓 You completed all modules! Tap to get your Certificate →
        </div>
      )}

      {/* Module Cards */}
      <div style={styles.grid}>
        {modules.map((mod) => {
          const done = progress[mod.id];
          return (
            <div
              key={mod.id}
              style={{ ...styles.card, background: cardBg, borderTop: `4px solid ${mod.color}` }}
              onClick={() => navigate(`/module/${mod.id}`)}
              role="button" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/module/${mod.id}`)}
              aria-label={`Open ${mod.title} module`}
            >
              <div style={styles.cardIcon}>{mod.icon}</div>
              <h3 style={{ ...styles.cardTitle, color: text }}>{mod.title}</h3>
              <p style={{ ...styles.cardDesc, color: sub }}>{mod.description}</p>
              {done ? (
                <div style={styles.doneRow}>
                  <div style={{ ...styles.badge, background: '#22c55e' }}>
                    ✓ {done.score}/{done.total} — {done.percent}%
                  </div>
                  <button style={{ ...styles.retryBtn, color: mod.color, borderColor: mod.color }}
                    onClick={(e) => { e.stopPropagation(); navigate(`/module/${mod.id}`); }}>
                    Retry
                  </button>
                </div>
              ) : (
                <div style={{ ...styles.badge, background: mod.color }}>Start Module →</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Buttons */}
      <div style={styles.bottomRow}>
        <button style={styles.feedbackBtn} onClick={() => navigate('/feedback')} aria-label="Feedback">
          💬 Send Feedback
        </button>
        <button style={{ ...styles.feedbackBtn, background: '#1d4ed8' }} onClick={() => navigate('/leaderboard')} aria-label="Leaderboard">
          🏆 Leaderboard
        </button>
        {userIsAdmin && (
          <button style={{ ...styles.feedbackBtn, background: '#166534' }} onClick={() => navigate('/instructor')} aria-label="Instructor panel">
            🎓 Instructor Panel
          </button>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', fontFamily: 'system-ui, sans-serif' },
  header: {
    background: '#2c1810', color: '#fff', padding: '14px 16px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    position: 'sticky', top: 0, zIndex: 10,
  },
  logo: { fontSize: '18px', fontWeight: '700' },
  welcome: { fontSize: '12px', color: '#d4a574', marginTop: '2px' },
  headerRight: { display: 'flex', alignItems: 'center', gap: '8px' },
  iconBtn: {
    background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff',
    width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', fontSize: '16px',
  },
  logoutBtn: {
    background: 'transparent', border: '1.5px solid #d4a574', color: '#d4a574',
    padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px',
  },
  hero: {
    background: 'linear-gradient(135deg, #8B4513 0%, #d2691e 100%)',
    padding: '28px 20px', textAlign: 'center', color: '#fff',
  },
  heroTitle: { fontSize: '24px', fontWeight: '700', margin: '0 0 6px' },
  heroSub: { fontSize: '14px', opacity: 0.9, margin: '0 0 16px' },
  progressBarWrap: { background: 'rgba(255,255,255,0.3)', borderRadius: '10px', height: '10px', maxWidth: '300px', margin: '0 auto' },
  progressBar: { background: '#fff', borderRadius: '10px', height: '10px', transition: 'width 0.5s ease' },
  certBanner: {
    background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#fff',
    padding: '14px 20px', textAlign: 'center', fontWeight: '600', fontSize: '15px', cursor: 'pointer',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
    gap: '16px', padding: '20px 16px',
  },
  card: {
    borderRadius: '16px', padding: '22px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)', cursor: 'pointer',
  },
  cardIcon: { fontSize: '38px', marginBottom: '10px' },
  cardTitle: { fontSize: '17px', fontWeight: '700', margin: '0 0 6px' },
  cardDesc: { fontSize: '13px', lineHeight: 1.5, margin: '0 0 14px' },
  doneRow: { display: 'flex', alignItems: 'center', gap: '10px' },
  badge: {
    display: 'inline-block', color: '#fff', padding: '6px 12px',
    borderRadius: '20px', fontSize: '12px', fontWeight: '600',
  },
  retryBtn: {
    background: 'transparent', border: '1.5px solid', padding: '5px 12px',
    borderRadius: '20px', fontSize: '12px', fontWeight: '600', cursor: 'pointer',
  },
  bottomRow: { display: 'flex', gap: '12px', padding: '0 16px 40px', justifyContent: 'center', flexWrap: 'wrap' },
  feedbackBtn: {
    background: '#2c1810', color: '#fff', border: 'none',
    padding: '14px 28px', borderRadius: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer',
  },
};
