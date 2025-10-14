import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/Authentication/SignUp'
import Login from './pages/Authentication/Login'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import Learn from './pages/Learn'
import ChatAI from './pages/ChatAI'
import IT from './pages/IT'
import Finance from './pages/Finance'
import Engineering from './pages/Engineering'
import ITQuiz from './pages/ITQuiz'
import FinanceQuiz from './pages/FinanceQuiz'
import EngineeringQuiz from './pages/EngineeringQuiz'
import Careerpredictor from './pages/CareerPredictor'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />}/>
          <Route path="/careerpredictor" element={<Careerpredictor />}/>
          <Route path="/learn" element={<Learn />}/>
          <Route path="/ai/chat" element={<ChatAI />}/>
          <Route path="/learn/it" element={<IT />} />
          <Route path="/learn/finance" element={<Finance/>} />
          <Route path="/learn/engineering" element={<Engineering />} />
          <Route path="/quiz/it" element={<ITQuiz />}/>
          <Route path="/quiz/finance" element={<FinanceQuiz />}/>
          <Route path="/quiz/engineering" element={<EngineeringQuiz />}/>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
