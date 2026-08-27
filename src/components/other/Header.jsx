import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/auth-context'

const Header = () => {
  const { user, logout } = useAuthContext()
  const navigate = useNavigate()
  const displayName = user?.email?.split('@')[0] || 'User'

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="flex items-end justify-between gap-4">
      <h1 className="text-xl sm:text-2xl text-white">
        Hello <br />
        <span className="font-semibold text-2xl sm:text-3xl capitalize">{displayName} 👋</span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-xs sm:text-sm md:text-base font-medium text-white px-3.5 sm:px-5 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
      >
        Log out
      </button>
    </div>
  )
}

export default Header