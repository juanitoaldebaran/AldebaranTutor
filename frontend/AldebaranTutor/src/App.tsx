// App.tsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/Authentication/SignUp'
import Login from './pages/Authentication/Login'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />}/>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
