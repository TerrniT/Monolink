import authApi from '@/pages/api/auth'
import { useAuthStore } from '@/store/store'

const SignOut = () => {
  const { setUser, isAuth, setIsAuth } = useAuthStore((state) => ({
    setUser: state.setUser,
    isAuth: state.isAuth,
    setIsAuth: state.setIsAuth,
  }))

  const handleSubmit = () => {
    setUser(null)
    setIsAuth(false)
    authApi.signOut()
  }

  return (
    <button
      onClick={handleSubmit}
      className="btn rounded-xl border border-slate-400 bg-transparent py-2 px-4 text-sm filter backdrop-blur-lg transition-all duration-150 hover:border-zinc-600 hover:text-gray-800"
    >
      Sign Out
    </button>
  )
}

export default SignOut
