import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { getUserProgress } from '../utils/progress';
import { modules } from '../data/modules';

export default function Profile() {
  const { currentUser, logout } = useAuth();
  const { dark } = useTheme();
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
  const totalScore = Object.values(progress).reduce((a, b) => a + b.score, 0);
  const totalQuestions = Object.values(progress).reduce((a, b) => a + b.total, 0);
  const overallPercent = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;

  async function handleLogout() {
    await logout();
    navigate('/login');
  }

  return (
    <div style={{ ...styles.container, background: bg }}>
      <div style={styles.header}>
        <button style={styles.back} onClick={() => navigate('/dashboard')} aria-label="Back">← Dashboard</button>
        <div style={styles.headerTitle}>👤 My Profile</div>
      </div>

      <div style={styles.body}>
        {/* Avatar Card */}
        <div style={{ ...styles.card, background: cardBg, textAlign: 'center' }}>
          <div style={styles.avatar}>{currentUser?.displayName?.[0]?.toUpperCase() || '?'}</div>
          <h2 style={{ ...styles.name, color: text }}>{currentUser?.displayName}</h2>
          <p style={{ color: sub, fontSize: '14px' }}>{currentUser?.email}</p>
        </div>

        {/* Stats */}
        <div style={styles.statsRow}>
          <div style={{ ...styles.statBox, background: cardBg }}>
            <div style={styles.statNum}>{completedCount}/{modules.length}</div>
            <div style={{ ...styles.statLabel, color: sub }}>Modules Done</div>
          </div>
          <div style={{ ...styles.statBox, background: cardBg }}>
            <div style={styles.statNum}>{overallPercent}%</div>
            <div style={{ ...styles.statLabel, color: sub }}>Overall Score</div>
          </div>
          <div style={{ ...styles.statBox, background: cardBg }}>
            <div style={styles.statNum}>{totalScore}</div>
            <div style={{ ...styles.statLabel, color: sub }}>Total Correct</div>
          </div>
        </div>

        {/* Module Results */}
        <div style={{ ...styles.card, background: cardBg }}>
          <h3 style={{ ...styles.sectionTitle, color: text }}>Module Results</h3>
          {loading ? <p style={{ color: sub }}>Loading...</p> : modules.map((mod) => {
            const p = progress[mod.id];
            return (
              <div key={mod.id} style={styles.moduleRow}>
                <div style={styles.moduleLeft}>
                  <span style={styles.modIcon}>{mod.icon}</span>
                  <span style={{ color: text, fontSize: '14px' }}>{mod.title}</span>
                </div>
                {p ? (
                  <div style={styles.moduleRight}>
                    <div style={{ ...styles.miniBar, background: dark ? '#444' : '#eee' }}>
                      <div style={{ ...styles.miniFill, width: `${p.percent}%`, background: mod.color }} />
                    </div>
                    <span style={{ color: mod.color, fontSize: '13px', fontWeight: '700' }}>{p.percent}%</span>
                  </div>
                ) : (
                  <span style={{ color: sub, fontSize: '13px' }}>Not started</span>
                )}
              </div>
            );
          })}
        </div>

        {completedCount === modules.length && (
          <button style={styles.certBtn} onClick={() => navigate('/certificate')} aria-label="View certificate">
            🎓 View My Certificate
          </button>
        )}

        <button style={styles.logoutBtn} onClick={handleLogout} aria-label="Sign out">Sign Out</button>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', fontFamily: 'system-ui, sans-serif' },
  header: {
    background: '#2c1810', color: '#fff', padding: '14px 16px',
    display: 'flex', alignItems: 'center', gap: '14px',
    position: 'sticky', top: 0, zIndex: 10,
  },
  back: {
    background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
    color: '#fff', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px',
  },
  headerTitle: { fontSize: '17px', fontWeight: '700' },
  body: { padding: '16px', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' },
  card: { borderRadius: '16px', padding: '22px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
  avatar: {
    width: '72px', height: '72px', borderRadius: '50%',
    background: 'linear-gradient(135deg, #8B4513, #d2691e)',
    color: '#fff', fontSize: '32px', fontWeight: '700',
    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px',
  },
  name: { fontSize: '20px', fontWeight: '700', margin: '0 0 4px' },
  statsRow: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' },
  statBox: { borderRadius: '12px', padding: '16px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' },
  statNum: { fontSize: '24px', fontWeight: '700', color: '#8B4513' },
  statLabel: { fontSize: '11px', marginTop: '4px' },
  sectionTitle: { fontSize: '16px', fontWeight: '700', marginBottom: '16px' },
  moduleRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' },
  moduleLeft: { display: 'flex', alignItems: 'center', gap: '10px' },
  modIcon: { fontSize: '22px' },
  moduleRight: { display: 'flex', alignItems: 'center', gap: '8px' },
  miniBar: { width: '80px', height: '6px', borderRadius: '3px', overflow: 'hidden' },
  miniFill: { height: '6px', borderRadius: '3px', transition: 'width 0.4s' },
  certBtn: {
    background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#fff', border: 'none',
    padding: '14px', borderRadius: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer',
  },
  logoutBtn: {
    background: '#dc2626', color: '#fff', border: 'none',
    padding: '14px', borderRadius: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer',
  },
};
