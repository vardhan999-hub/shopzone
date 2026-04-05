import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

export default function Navbar() {
  const { cartCount } = useCart()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          Shop<span>Zone</span>
        </Link>

        <ul className="navbar-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <div className="navbar-actions">
          {user ? (
            <>
              <span className="navbar-user">👋 {user.name}</span>
              <button className="btn btn-ghost" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn btn-outline" style={{ padding: '8px 18px', fontSize: '13px' }}>
              Login
            </Link>
          )}

          <Link to="/cart" className="navbar-cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  )
}
