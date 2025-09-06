import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/Authentication/SignUp'
import Login from './pages/Authentication/Login'
import ProtectedRoute from './route/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'

function App() {

  return (
    <AuthProvider>
      <Router>
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<ProtectedRoute />}>
            <Route path="/ai/conversations" element={<Home/>}></Route>
        </Route>
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
