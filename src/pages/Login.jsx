import { useState } from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Login.css'

export default function Login() {
  const { login, isLoggedIn } = useAuth()
  const navigate  = useNavigate()
  const location  = useLocation()

  // Fix 2 — read the intended destination sent by ProtectedRoute
  const from = location.state?.from || '/'

  const [name, setName] = useState('')

  // Already logged in → send them where they were going
  if (isLoggedIn) return <Navigate to={from} replace />

  const handleGuest = () => {
    login('Guest')
    navigate(from, { replace: true })
  }

  const handleNamed = (e) => {
    e.preventDefault()
    login(name.trim() || 'Guest')
    navigate(from, { replace: true })
  }

  return (
    <div className="page login-page">
      <div className="login-card fade-up">
        <div className="login-header">
          <p className="section-label">Welcome back</p>
          <h1 className="login-title">Sign In</h1>

          {/* Show redirect message if coming from a protected route */}
          {from !== '/' && (
            <p className="login-redirect-msg">
              🔒 Login required to access <strong>{from}</strong>
            </p>
          )}
        </div>

        <form onSubmit={handleNamed} className="login-form">
          <label htmlFor="username">Your Name (optional)</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your name…"
            value={name}
            onChange={e => setName(e.target.value)}
            className="login-input"
            autoFocus
          />
          <button type="submit" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
            Login with Name
          </button>
        </form>

        <div className="login-divider"><span>or</span></div>

        {/* Fix 1 — clean guest login that uses AuthContext */}
        <button className="btn btn-primary guest-btn" onClick={handleGuest}>
          👤 Continue as Guest
        </button>

        <p className="login-note">
          No password needed — this is a demo store.
        </p>
      </div>
    </div>
  )
}
