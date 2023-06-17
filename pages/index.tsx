import { useSession } from '@/hooks'
import Dashboard from './dashboard'
import Loading from './loading'
import Signin from './signin'


export default function Home() {
  const { data: session, isLoading } = useSession()

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

