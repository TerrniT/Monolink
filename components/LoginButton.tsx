import { useRouter } from 'next/router'
import Button from './atoms/button'

const LoginButton = () => {
  const router = useRouter()

  return <Button title="Login" onClick={() => router.push('/login')} />
}

export default LoginButton
