import { useState, useCallback } from 'react'
import { AuthContext } from './auth-context'

// Re-hydrate session across page refreshes
const getStoredSession = () => {
  try {
    const raw = localStorage.getItem('session')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredSession)

  const login = useCallback((email, password) => {
    // Check admin
    const adminRaw = localStorage.getItem('admin')
    if (adminRaw) {
      const admins = JSON.parse(adminRaw)
      if (admins.some((a) => a.email === email && a.password === password)) {
        const session = { email, role: 'admin' }
        setUser(session)
        localStorage.setItem('session', JSON.stringify(session))
        return true
      }
    }

    // Check employees
    const empRaw = localStorage.getItem('employees')
    if (empRaw) {
      const employees = JSON.parse(empRaw)
      if (employees.some((e) => e.email === email && e.password === password)) {
        const session = { email, role: 'employee' }
        setUser(session)
        localStorage.setItem('session', JSON.stringify(session))
        return true
      }
    }

    return false
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('session')
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider