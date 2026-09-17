import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Maintenance from './pages/Maintenance';

// ─── MAINTENANCE MODE ───────────────────────────────────────────────────────
// Set to true to show maintenance page, false to restore normal operation
const MAINTENANCE_MODE = false;
// ────────────────────────────────────────────────────────────────────────────

import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Module from './pages/Module';
import Feedback from './pages/Feedback';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import Certificate from './pages/Certificate';
import InstructorDashboard from './pages/InstructorDashboard';

export default function App() {
  if (MAINTENANCE_MODE) {
    return <Maintenance />;
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/module/:id" element={<PrivateRoute><Module /></PrivateRoute>} />
            <Route path="/feedback" element={<PrivateRoute><Feedback /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
            <Route path="/certificate" element={<PrivateRoute><Certificate /></PrivateRoute>} />
            <Route path="/instructor" element={<PrivateRoute><InstructorDashboard /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
