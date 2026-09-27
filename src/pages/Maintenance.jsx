export default function Maintenance() {
  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <div style={styles.icon}>🔧</div>
        <h1 style={styles.title}>System Unavailable</h1>
        <div style={styles.divider} />
        <p style={styles.msg}>
          This application is currently unavailable.
          Please contact the administrator for access.
        </p>
        <div style={styles.badge}>🪚 Compass</div>
        <p style={styles.small}>Access restricted by administrator</p>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #2c1810 0%, #8B4513 100%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '20px', fontFamily: 'system-ui, sans-serif',
  },
  card: {
    background: '#fff', borderRadius: '20px', padding: '48px 32px',
    width: '100%', maxWidth: '400px', textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  icon: { fontSize: '64px', marginBottom: '16px' },
  title: { fontSize: '24px', fontWeight: '700', color: '#2c1810', margin: '0 0 16px' },
  divider: { height: '2px', background: '#f0f0f0', margin: '0 0 20px' },
  msg: { fontSize: '15px', color: '#666', lineHeight: 1.7, margin: '0 0 24px' },
  badge: {
    display: 'inline-block', background: '#2c1810', color: '#d4a574',
    padding: '8px 20px', borderRadius: '20px', fontSize: '14px', fontWeight: '600', marginBottom: '12px',
  },
  small: { fontSize: '12px', color: '#aaa', margin: 0 },
};
