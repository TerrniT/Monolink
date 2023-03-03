import LoginButton from '@/components/LoginButton'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { supabase } from '@/utils/supabaseClient'
import { useAuthStore } from '@/store/store'
import Dashboard from './dashboard'
import Login from './login'
import { useRouter } from 'next/router'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

interface ServerProps {
  initialSession: any
}

const Home = ({ initialSession }: ServerProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const userZ = useAuthStore((state) => {
    user: state.user
  })
  console.log('@')

  // useEffect(() => {
  //   let mounted = true

  //   async function getInitialSession() {
  //     const {
  //       data: { session },
  //     } = await supabase.auth.getSession()

  //     if (mounted) {
  //       if (session) {
  //         setSession(session)
  //       }
  //       setIsLoading(false)
  //     }
  //   }
  //   //@ts-ignore
  //   const { subscription } = supabase.auth.onAuthStateChange(
  //     (_event, session) => {
  //       setSession(session)
  //     }
  //   )

  //   getInitialSession()

  //   return () => {
  //     mounted = false
  //     subscription?.unsubscrbie()
  //   }
  // }, [])

  return (
    <div>
      {!initialSession ? <Login /> : <Dashboard session={initialSession} />}
    </div>
  )
}

export default Home

export const getServerSideProps = async (ctx: any) => {
  const supabase = createServerSupabaseClient(ctx)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      initialSession: session,
    },
  }
}
