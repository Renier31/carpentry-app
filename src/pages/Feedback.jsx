import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';
import { saveFeedback } from '../utils/progress';

// ─── EmailJS Setup ─────────────────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add a Gmail service and connect your Gmail
// 3. Create a template with: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Replace these three values with your actual IDs:
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

export default function Feedback() {
  const { currentUser } = useAuth();
  const { dark } = useTheme();
  const navigate = useNavigate();
  const formRef = useRef();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const bg = dark ? '#1a1a1a' : '#f5f0eb';
  const cardBg = dark ? '#2a2a2a' : '#fff';
  const text = dark ? '#f0f0f0' : '#2c1810';
  const sub = dark ? '#aaa' : '#666';

  async function handleSubmit(e) {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus('sending');

    const templateParams = {
      from_name:  currentUser?.displayName || 'Student',
      from_email: currentUser?.email || 'unknown',
      subject:    subject || 'General Feedback',
      message,
    };

    try {
      // Save to Firestore regardless of EmailJS config
      await saveFeedback(currentUser?.uid, currentUser?.displayName, currentUser?.email, subject, message);

      // Try EmailJS if configured
      if (!EMAILJS_SERVICE_ID.includes('YOUR')) {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      }
      setStatus('success');
      setSubject('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div style={{ ...styles.container, background: bg }}>
      <div style={styles.header}>
        <button style={styles.back} onClick={() => navigate('/dashboard')} aria-label="Back">← Dashboard</button>
        <div style={styles.headerTitle}>💬 Feedback</div>
      </div>

      <div style={styles.body}>
        <div style={{ ...styles.card, background: cardBg }}>
          <h2 style={{ ...styles.title, color: text }}>Send a Message to Your Instructor</h2>
          <p style={{ ...styles.subtitle, color: sub }}>
            Questions, suggestions, or comments? Send them directly.
            Your message is saved and the instructor will see it.
          </p>

          {status === 'success' && (
            <div style={styles.success}>✅ Message sent! Your instructor will see it shortly.</div>
          )}
          {status === 'error' && (
            <div style={styles.error}>❌ Failed to send. Please try again.</div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
            <label style={{ ...styles.label, color: sub }}>Your Name</label>
            <input style={{ ...styles.input, color: text, background: dark ? '#333' : '#fafafa' }}
              type="text" value={currentUser?.displayName || ''} readOnly aria-label="Name" />

            <label style={{ ...styles.label, color: sub }}>Your Email</label>
            <input style={{ ...styles.input, color: text, background: dark ? '#333' : '#fafafa' }}
              type="email" value={currentUser?.email || ''} readOnly aria-label="Email" />

            <label style={{ ...styles.label, color: sub }}>Subject</label>
            <input style={{ ...styles.input, color: text, background: dark ? '#333' : '#fff', borderColor: dark ? '#555' : '#e0e0e0' }}
              type="text" placeholder="e.g. Question about joinery lesson"
              value={subject} onChange={(e) => setSubject(e.target.value)} aria-label="Subject" />

            <label style={{ ...styles.label, color: sub }}>Message *</label>
            <textarea style={{ ...styles.textarea, color: text, background: dark ? '#333' : '#fff', borderColor: dark ? '#555' : '#e0e0e0' }}
              placeholder="Write your message here..."
              value={message} onChange={(e) => setMessage(e.target.value)}
              required rows={5} aria-label="Message" />

            <button style={status === 'sending' ? styles.btnDisabled : styles.btn}
              type="submit" disabled={status === 'sending'} aria-label="Send">
              {status === 'sending' ? 'Sending...' : '📨 Send Message'}
            </button>
          </form>
        </div>
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
  body: { padding: '16px', maxWidth: '600px', margin: '0 auto' },
  card: { borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
  title: { fontSize: '20px', fontWeight: '700', marginBottom: '6px' },
  subtitle: { fontSize: '13px', marginBottom: '22px', lineHeight: 1.6 },
  success: { background: '#dcfce7', color: '#166534', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px' },
  error: { background: '#fee2e2', color: '#dc2626', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  label: { fontSize: '13px', fontWeight: '600' },
  input: { padding: '12px 14px', borderRadius: '8px', border: '1.5px solid #e0e0e0', fontSize: '15px' },
  textarea: { padding: '12px 14px', borderRadius: '8px', border: '1.5px solid #e0e0e0', fontSize: '15px', resize: 'vertical', fontFamily: 'inherit' },
  btn: { padding: '14px', borderRadius: '10px', background: '#8B4513', color: '#fff', fontSize: '15px', fontWeight: '600', border: 'none', cursor: 'pointer', marginTop: '6px' },
  btnDisabled: { padding: '14px', borderRadius: '10px', background: '#ccc', color: '#fff', fontSize: '15px', fontWeight: '600', border: 'none', cursor: 'not-allowed', marginTop: '6px' },
};
