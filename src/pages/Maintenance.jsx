export default function Maintenance() {
  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <div style={styles.icon}>🔧</div>
        <h1 style={styles.title}>Under Maintenance</h1>
        <p style={styles.msg}>
          We're currently performing scheduled maintenance to improve your experience.
          Please check back soon.
        </p>
        <div style={styles.badge}>🪚 Compass</div>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #2c1810 0%, #8B4513 100%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
    fontFamily: 'system-ui, sans-serif',
  },
  card: {
    background: '#fff', borderRadius: '20px', padding: '48px 32px',
    width: '100%', maxWidth: '420px', textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  icon: { fontSize: '72px', marginBottom: '16px' },
  title: { fontSize: '28px', fontWeight: '700', color: '#2c1810', margin: '0 0 16px' },
  msg: { fontSize: '15px', color: '#666', lineHeight: 1.7, margin: '0 0 28px' },
  badge: { display: 'inline-block', background: '#f5f0eb', color: '#8B4513', padding: '8px 20px', borderRadius: '20px', fontSize: '14px', fontWeight: '600' },
};
