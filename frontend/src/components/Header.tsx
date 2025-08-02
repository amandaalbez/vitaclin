import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="VitaClin" />
        </Link>

        <nav className="nav">
          <Link to="/">Início</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Painel</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
