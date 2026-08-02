import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUserProgress } from '../utils/progress';
import { modules } from '../data/modules';

export default function Certificate() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      getUserProgress(currentUser.uid).then((p) => { setProgress(p); setLoading(false); });
    }
  }, [currentUser]);

  const completedCount = Object.keys(progress).length;
  const allDone = completedCount === modules.length;
  const totalScore = Object.values(progress).reduce((a, b) => a + b.score, 0);
  const totalQ = Object.values(progress).reduce((a, b) => a + b.total, 0);
  const overallPercent = totalQ > 0 ? Math.round((totalScore / totalQ) * 100) : 0;
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  if (loading) return <div style={{ padding: 40, textAlign: 'center' }}>Loading...</div>;

  if (!allDone) {
    return (
      <div style={styles.container}>
        <div style={styles.notDone}>
          <div style={{ fontSize: '60px' }}>📚</div>
          <h2>Not yet complete</h2>
          <p>Complete all {modules.length} modules to earn your certificate.</p>
          <p style={{ color: '#8B4513', fontWeight: '600' }}>{completedCount}/{modules.length} done</p>
          <button style={styles.btn} onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.certWrap}>
        {/* Certificate */}
        <div style={styles.cert} id="certificate">
          <div style={styles.border}>
            <div style={styles.topLine} />
            <div style={styles.certIcon}>🪚</div>
            <div style={styles.certHeader}>Certificate of Completion</div>
            <div style={styles.certSub}>This is to certify that</div>
            <div style={styles.studentName}>{currentUser?.displayName}</div>
            <div style={styles.certText}>
              has successfully completed the
            </div>
            <div style={styles.courseName}>CarpentryPro Fundamentals Course</div>
            <div style={styles.certText}>
              covering Measurement & Marking, Tool Handling & Safety,<br />
              Joinery, and Assembly with an overall score of
            </div>
            <div style={styles.score}>{overallPercent}%</div>
            <div style={styles.certDate}>Issued on {today}</div>
            <div style={styles.bottomLine} />
            <div style={styles.signature}>
              <div style={styles.sigLine} />
              <div style={styles.sigLabel}>Instructor</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.btnRow}>
          <button style={styles.btn} onClick={() => window.print()} aria-label="Print certificate">
            🖨️ Print Certificate
          </button>
          <button style={{ ...styles.btn, background: '#2c1810' }} onClick={() => navigate('/dashboard')} aria-label="Dashboard">
            ← Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh', background: '#f5f0eb',
    fontFamily: 'Georgia, serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
  },
  notDone: { textAlign: 'center', background: '#fff', padding: '40px', borderRadius: '20px', maxWidth: '400px' },
  certWrap: { width: '100%', maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '20px' },
  cert: {
    background: '#fffdf5',
    border: '3px solid #8B4513',
    borderRadius: '16px',
    padding: '0',
    boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
  },
  border: {
    margin: '12px', border: '1.5px solid #d2691e',
    borderRadius: '10px', padding: '40px 32px', textAlign: 'center',
  },
  topLine: { height: '4px', background: 'linear-gradient(90deg, #8B4513, #d2691e, #8B4513)', borderRadius: '2px', marginBottom: '28px' },
  bottomLine: { height: '4px', background: 'linear-gradient(90deg, #8B4513, #d2691e, #8B4513)', borderRadius: '2px', marginTop: '28px', marginBottom: '20px' },
  certIcon: { fontSize: '52px', marginBottom: '12px' },
  certHeader: { fontSize: '28px', fontWeight: '700', color: '#8B4513', letterSpacing: '1px', marginBottom: '16px' },
  certSub: { fontSize: '14px', color: '#888', marginBottom: '8px', fontStyle: 'italic' },
  studentName: { fontSize: '32px', fontWeight: '700', color: '#2c1810', marginBottom: '14px', borderBottom: '2px solid #d2691e', paddingBottom: '10px', display: 'inline-block' },
  certText: { fontSize: '14px', color: '#555', lineHeight: 1.7, margin: '10px 0' },
  courseName: { fontSize: '20px', fontWeight: '700', color: '#8B4513', margin: '8px 0' },
  score: { fontSize: '42px', fontWeight: '700', color: '#22c55e', margin: '8px 0' },
  certDate: { fontSize: '13px', color: '#999', fontStyle: 'italic' },
  signature: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' },
  sigLine: { width: '160px', height: '2px', background: '#8B4513' },
  sigLabel: { fontSize: '13px', color: '#888' },
  btnRow: { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' },
  btn: {
    background: '#8B4513', color: '#fff', border: 'none',
    padding: '14px 28px', borderRadius: '12px', fontSize: '15px', fontWeight: '600', cursor: 'pointer',
  },
};
