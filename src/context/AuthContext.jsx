import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('sz_user')) || null }
    catch { return null }
  })

  const login = (name = 'Guest') => {
    const u = { name, loggedIn: true }
    setUser(u)
    localStorage.setItem('sz_user', JSON.stringify(u))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('sz_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
