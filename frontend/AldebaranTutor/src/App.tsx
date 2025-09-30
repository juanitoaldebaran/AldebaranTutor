// App.tsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/Authentication/SignUp'
import Login from './pages/Authentication/Login'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Dashboard from './pages/Dashboard'
import ChatAI from './pages/ChatAI'
import IT from './pages/IT'
import Finance from './pages/Finance'
import Engineering from './pages/Engineering'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />}/>
          <Route path="/learn" element={<Learn />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/ai" element={<ChatAI />}/>
          <Route path="/learn/it" element={<IT />} />
          <Route path="/learn/finance" element={<Finance/>} />
          <Route path="/learn/engineering" element={<Engineering />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
