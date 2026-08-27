import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuthContext } from '../../context/auth-context'
import toast from 'react-hot-toast'

const Login = () => {
  const { user, login } = useAuthContext()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  if (user) {
    return <Navigate to={user.role === 'admin' ? '/admin' : '/employee'} replace />
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (!email.trim() || !password.trim()) {
      toast.error('Please enter both email and password.')
      return
    }

    const ok = login(email, password)
    if (ok) {
      toast.success('Logged in successfully!')
      const adminRaw = localStorage.getItem('admin')
      const isAdmin = adminRaw && JSON.parse(adminRaw).some((a) => a.email === email && a.password === password)
      navigate(isAdmin ? '/admin' : '/employee', { replace: true })
    } else {
      toast.error('Invalid credentials. Please try again.')
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black p-4">
      <div className="w-full max-w-md border-2 rounded-xl border-emerald-600 p-6 sm:p-12 md:p-16">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-white outline-none text-sm sm:text-base md:text-xl bg-transparent border-2 border-emerald-500 py-3 sm:py-4 px-4 sm:px-5 rounded-full placeholder:text-zinc-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="w-full text-white outline-none text-sm sm:text-base md:text-xl bg-transparent border-2 border-emerald-500 py-3 sm:py-4 px-4 sm:px-5 rounded-full placeholder:text-zinc-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="w-full mt-1 bg-emerald-500 text-white text-sm sm:text-base md:text-xl font-medium border-2 border-emerald-500 py-3 sm:py-4 px-4 sm:px-5 rounded-full hover:bg-emerald-600 transition-colors cursor-pointer">
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login