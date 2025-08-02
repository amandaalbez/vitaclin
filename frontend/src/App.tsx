import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0', marginBottom: '2rem' }}>
          <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/login" style={{ marginRight: '1rem', textDecoration: 'none' }}>
            Login
          </Link>
          <Link to="/dashboard" style={{ marginRight: '1rem', textDecoration: 'none' }}>
            Dashboard
          </Link>
        </nav>

        <main style={{ padding: '0 1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
