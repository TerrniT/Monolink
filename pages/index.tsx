import { SignOutButton } from '@/components'
import { useSession } from '@/hooks'
import { useRouter } from 'next/router'
import Dashboard from './dashboard'
import Loading from './loading'
import Signin from './signin'

export default function Home() {
  const { data: session, isLoading } = useSession()
  const router = useRouter()

  if (!session && isLoading) {
    return <Loading />
  }

  return (
    <>
      {
        session?.session == null ? (
          <Signin />
        ) : (
          <Dashboard />
        )
      }
    </>
  )
}

