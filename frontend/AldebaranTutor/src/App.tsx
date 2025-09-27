// App.tsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/Authentication/SignUp'
import Login from './pages/Authentication/Login'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import Learn from './pages/Learn'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />}/>
          <Route path="/learn" element={<Learn />}/>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
