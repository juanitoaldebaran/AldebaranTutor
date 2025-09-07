// App.tsx
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/Authentication/SignUp'
import Login from './pages/Authentication/Login'
import ProtectedRoute from './route/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/ai/conversations" element={<Home />} />
            <Route path="/ai/conversations/:conversationId/messages" element={<Home />} />
          </Route>

          {/* Redirects */}
          <Route path="*" element={<Navigate to={"/login"} replace />} />
          <Route path="/" element={<Navigate to={"/login"} replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
