import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch {
      setError('Invalid email or password. Please try again.');
    }
    setLoading(false);
  }

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <div style={styles.logo}>🪚</div>
        <h1 style={styles.title}>Compass</h1>
        <p style={styles.subtitle}>Your Digital Carpentry Classroom</p>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
          />
          <button style={loading ? styles.btnDisabled : styles.btn} type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p style={styles.link}>
          Don&apos;t have an account?{' '}
          <Link to="/register" style={styles.linkText}>Create one</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #2c1810 0%, #8B4513 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    background: '#fff',
    borderRadius: '20px',
    padding: '40px 32px',
    width: '100%',
    maxWidth: '380px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  logo: { fontSize: '56px', marginBottom: '8px' },
  title: { fontSize: '28px', fontWeight: '700', color: '#2c1810', margin: '0 0 4px' },
  subtitle: { fontSize: '14px', color: '#888', marginBottom: '28px' },
  error: {
    background: '#fee2e2', color: '#dc2626', padding: '12px',
    borderRadius: '8px', marginBottom: '16px', fontSize: '14px',
  },
  form: { display: 'flex', flexDirection: 'column', gap: '14px' },
  input: {
    padding: '14px 16px', borderRadius: '10px', border: '1.5px solid #e0e0e0',
    fontSize: '16px', outline: 'none', transition: 'border 0.2s',
  },
  btn: {
    padding: '14px', borderRadius: '10px', background: '#8B4513',
    color: '#fff', fontSize: '16px', fontWeight: '600',
    border: 'none', cursor: 'pointer', marginTop: '4px',
  },
  btnDisabled: {
    padding: '14px', borderRadius: '10px', background: '#ccc',
    color: '#fff', fontSize: '16px', fontWeight: '600',
    border: 'none', cursor: 'not-allowed', marginTop: '4px',
  },
  link: { marginTop: '20px', fontSize: '14px', color: '#666' },
  linkText: { color: '#8B4513', fontWeight: '600', textDecoration: 'none' },
};
