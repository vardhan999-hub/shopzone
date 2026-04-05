import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// Fix 2 — sends location.pathname as state.from so Login can redirect back
export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth()
  const location = useLocation()

  return isLoggedIn
    ? children
    : <Navigate to="/login" state={{ from: location.pathname }} replace />
}
