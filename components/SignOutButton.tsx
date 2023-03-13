import { supabase } from '@/utils/supabaseClient'
import { useRouter } from 'next/router'

const SignOut = () => {
  const router = useRouter()

  const handleSubmit = async () => {

    const { error } = await supabase.auth.signOut()
    router.push("/login")

  }

  return (
    <button
      onClick={() => handleSubmit()}
      className="btn rounded-xl border border-slate-400 bg-transparent py-2 px-4 text-sm filter backdrop-blur-lg transition-all duration-150 hover:border-zinc-600 hover:text-gray-800"
    >
      Sign Out
    </button>
  )
}

export default SignOut
