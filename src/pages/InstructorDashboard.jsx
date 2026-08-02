import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { getAllProgress, getAllFeedback } from '../utils/progress';
import { modules } from '../data/modules';

// Your Firebase UID — replace this with your actual UID after you first log in
// Find it in Firebase Console > Authentication > Users > User UID column
const INSTRUCTOR_UID = 'VTWCSTakXoMiiGz6srAq3kCxKan2';

export default function InstructorDashboard() {
  const { currentUser } = useAuth();
  const { dark } = useTheme();
  const navigate = useNavigate();
  const [progress, setProgress] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [tab, setTab] = useState('students');
  const [loading, setLoading] = useState(true);

  const bg = dark ? '#1a1a1a' : '#f5f0eb';
  const cardBg = dark ? '#2a2a2a' : '#fff';
  const text = dark ? '#f0f0f0' : '#2c1810';
  const sub = dark ? '#aaa' : '#666';

  useEffect(() => {
    if (currentUser?.uid !== INSTRUCTOR_UID) return;
    Promise.all([getAllProgress(), getAllFeedback()]).then(([p, f]) => {
      setProgress(p);
      setFeedback(f.sort((a, b) => new Date(b.date) - new Date(a.date)));
      setLoading(false);
    });
  }, [currentUser]);

  if (currentUser?.uid !== INSTRUCTOR_UID) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h2>Access Denied</h2>
        <p>This page is for instructors only.</p>
        <button style={styles.btn} onClick={() => navigate('/dashboard')}>Go Back</button>
      </div>
    );
  }

  // Build student summary
  const byUser = {};
  progress.forEach((entry) => {
    if (!byUser[entry.userId]) byUser[entry.userId] = { userId: entry.userId, entries: [] };
    byUser[entry.userId].entries.push(entry);
  });
  const students = Object.values(byUser).map((u) => {
    const total = u.entries.reduce((a, b) => a + b.total, 0);
    const score = u.entries.reduce((a, b) => a + b.score, 0);
    return { ...u, modulesCompleted: u.entries.length, percent: total > 0 ? Math.round((score / total) * 100) : 0, score, total };
  }).sort((a, b) => b.percent - a.percent);

  return (
    <div style={{ ...styles.container, background: bg }}>
      <div style={styles.header}>
        <button style={styles.back} onClick={() => navigate('/dashboard')} aria-label="Back">← Dashboard</button>
        <div style={styles.headerTitle}>🎓 Instructor View</div>
      </div>

      {/* Stats Strip */}
      <div style={styles.statsRow}>
        <div style={{ ...styles.statBox, background: cardBg }}>
          <div style={{ ...styles.statNum, color: '#8B4513' }}>{students.length}</div>
          <div style={{ ...styles.statLabel, color: sub }}>Students</div>
        </div>
        <div style={{ ...styles.statBox, background: cardBg }}>
          <div style={{ ...styles.statNum, color: '#8B4513' }}>{progress.length}</div>
          <div style={{ ...styles.statLabel, color: sub }}>Completions</div>
        </div>
        <div style={{ ...styles.statBox, background: cardBg }}>
          <div style={{ ...styles.statNum, color: '#8B4513' }}>{feedback.length}</div>
          <div style={{ ...styles.statLabel, color: sub }}>Feedback</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button style={tab === 'students' ? { ...styles.tab, ...styles.tabActive } : styles.tab}
          onClick={() => setTab('students')}>👥 Students</button>
        <button style={tab === 'feedback' ? { ...styles.tab, ...styles.tabActive } : styles.tab}
          onClick={() => setTab('feedback')}>💬 Feedback</button>
        <button style={tab === 'modules' ? { ...styles.tab, ...styles.tabActive } : styles.tab}
          onClick={() => setTab('modules')}>📊 By Module</button>
      </div>

      <div style={styles.body}>
        {loading ? <p style={{ color: sub, padding: 20 }}>Loading data...</p> : (
          <>
            {/* Students Tab */}
            {tab === 'students' && (
              <div style={{ ...styles.card, background: cardBg }}>
                {students.length === 0 ? (
                  <p style={{ color: sub }}>No student activity yet.</p>
                ) : students.map((s, i) => (
                  <div key={s.userId} style={styles.studentRow}>
                    <div style={styles.studentRank}>#{i + 1}</div>
                    <div style={styles.studentInfo}>
                      <div style={{ color: text, fontWeight: '600' }}>Student {i + 1}</div>
                      <div style={{ color: sub, fontSize: '12px' }}>
                        {s.modulesCompleted}/{modules.length} modules • {s.score}/{s.total} correct
                      </div>
                      {/* Per-module progress */}
                      <div style={{ display: 'flex', gap: '4px', marginTop: '6px', flexWrap: 'wrap' }}>
                        {s.entries.map((e) => {
                          const mod = modules.find((m) => m.id === e.moduleId);
                          return (
                            <span key={e.moduleId} style={{ ...styles.modTag, background: mod?.color }}>
                              {mod?.icon} {e.percent}%
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div style={{ ...styles.scoreBadge, background: s.percent >= 80 ? '#22c55e' : s.percent >= 50 ? '#f59e0b' : '#ef4444' }}>
                      {s.percent}%
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Feedback Tab */}
            {tab === 'feedback' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {feedback.length === 0 ? (
                  <div style={{ ...styles.card, background: cardBg, color: sub }}>No feedback yet.</div>
                ) : feedback.map((f) => (
                  <div key={f.id} style={{ ...styles.card, background: cardBg }}>
                    <div style={styles.fbHeader}>
                      <div>
                        <div style={{ color: text, fontWeight: '600' }}>{f.name}</div>
                        <div style={{ color: sub, fontSize: '12px' }}>{f.email} • {new Date(f.date).toLocaleDateString()}</div>
                      </div>
                      <div style={styles.fbSubject}>{f.subject || 'General'}</div>
                    </div>
                    <p style={{ color: text, fontSize: '14px', marginTop: '10px', lineHeight: 1.6 }}>{f.message}</p>
                  </div>
                ))}
              </div>
            )}

            {/* By Module Tab */}
            {tab === 'modules' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {modules.map((mod) => {
                  const modEntries = progress.filter((p) => p.moduleId === mod.id);
                  const avgScore = modEntries.length > 0
                    ? Math.round(modEntries.reduce((a, b) => a + b.percent, 0) / modEntries.length) : 0;
                  return (
                    <div key={mod.id} style={{ ...styles.card, background: cardBg, borderLeft: `4px solid ${mod.color}` }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontSize: '28px' }}>{mod.icon}</span>
                          <div>
                            <div style={{ color: text, fontWeight: '600' }}>{mod.title}</div>
                            <div style={{ color: sub, fontSize: '12px' }}>{modEntries.length} students completed</div>
                          </div>
                        </div>
                        <div style={{ ...styles.scoreBadge, background: mod.color }}>{avgScore}% avg</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
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
  statsRow: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', padding: '16px 16px 0' },
  statBox: { borderRadius: '12px', padding: '14px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' },
  statNum: { fontSize: '26px', fontWeight: '700' },
  statLabel: { fontSize: '11px', marginTop: '2px' },
  tabs: { display: 'flex', gap: '8px', padding: '16px 16px 0', flexWrap: 'wrap' },
  tab: {
    padding: '9px 14px', borderRadius: '8px', border: '1.5px solid #ddd',
    background: 'transparent', cursor: 'pointer', fontSize: '13px', fontWeight: '500', color: '#666',
  },
  tabActive: { background: '#8B4513', color: '#fff', borderColor: '#8B4513' },
  body: { padding: '12px 16px 40px', maxWidth: '700px' },
  card: { borderRadius: '14px', padding: '18px', boxShadow: '0 4px 16px rgba(0,0,0,0.07)', marginBottom: '0' },
  studentRow: { display: 'flex', alignItems: 'flex-start', gap: '12px', paddingBottom: '14px', marginBottom: '14px', borderBottom: '1px solid #f0f0f0' },
  studentRank: { fontSize: '18px', fontWeight: '700', color: '#8B4513', width: '30px', flexShrink: 0, paddingTop: '2px' },
  studentInfo: { flex: 1 },
  modTag: { color: '#fff', padding: '3px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '600' },
  scoreBadge: { color: '#fff', padding: '6px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: '700', flexShrink: 0 },
  fbHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' },
  fbSubject: { background: '#f3f4f6', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', color: '#555', flexShrink: 0 },
  btn: { background: '#8B4513', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '10px', fontSize: '15px', cursor: 'pointer', marginTop: '12px' },
};
