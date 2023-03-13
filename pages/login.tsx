import React, { useState } from 'react'
import Button from '@/components/atoms/button'
import Link from 'next/link'
import { supabase } from '@/utils/supabaseClient'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { Provider } from "@supabase/supabase-js"

const Login = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const router = useRouter()
  const [isLoading, setLoading] = useState<boolean>(false)


  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      },)

      if (error) {
        throw error
      } else {
        router.push("/")
      }
    } catch (error) {
      toast("Error", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false)
    }
  }

  // const handleInput = (e: any) => {
  //   e.prevent.default
  //   console.log(e.target.value)
  //   setEmail(e.target.value)
  //   setPassword(e.target.value)

  //   console.log(email)
  //   console.log(password)
  // }

  const signInWithOAuth = async (provider: Provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    })
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="max-w-sm mt-24 ">
        <h1 className="text-[44px] font-bold">Log In Monolink</h1>
        <div className='mt-[30px]'>
          <div className='flex flex-col gap-1 mb-[30px]'>
            <div className='flex items-start justify-start gap-1 '>
              <label className='text-white font-medium text-p'>Email</label>
              <p className='text-accent-green font-bold'>*</p>
            </div>
            <input className='bg-transparent rounded-[10px] border-[1px] border-gray-stroke placeholder:text-gray-stroke text-xs p-3' type="email" placeholder='example@gmail.com' value={email} onChange={(e: any) => setEmail(e.target.value)} />
          </div>

          <div className='flex flex-col gap-1 mb-[30px]'>
            <div className='flex items-start justify-start gap-1'>
              <label className='text-white font-medium text-p'>Password</label>
              <p className='text-accent-green font-bold'>*</p>
            </div>
            <input className='bg-transparent rounded-[10px] border-[1px] border-gray-stroke placeholder:text-gray-stroke text-xs p-3' type="password" placeholder='Your password' value={password} onChange={(e: any) => setPassword(e.target.value)} />
          </div>

          <div className='flex flex-col gap-2 mb-[30px]'>
            <div className='flex items-start justify-start gap-1'>
              <label className='text-white font-medium text-p'>
                <Link href="/" className='hover:text-accent-green-second transition-all duration-200'>
                  Forgot password?
                </Link>
              </label>
            </div>
            <Button title="Log In" className='bg-accent-green-second text-p text-black font-medium p-3' onClick={() => handleLogin(email, password)} />
            <div className='flex items-center my-[34px]'>
              <div className='h-[1px] w-full bg-gray-stroke'></div>
              <p className='text-gray-500 uppercase font-medium px-2'>or</p>
              <div className='h-[1px] w-full bg-gray-stroke'></div>
            </div>
            <Button title="Sign in with Metamask" icon="metamask" className='bg-transparent border-[1px] border-gray-stroke text-xs text-white font-normal p-2 mb-3 ' />
            <Button title="Sign in with Github" icon="github" className='bg-transparent border-[1px] border-gray-stroke text-xs text-white font-normal p-2 mb-3' onClick={() => signInWithOAuth("github")} />
            <Button title="Sign in with Google" icon="google" className='bg-transparent border-[1px] border-gray-stroke text-xs text-white font-normal p-2 mb-3' onClick={() => signInWithOAuth("google")} />
            <Link href="/signup" className='hover:text-accent-green-second text-accent-green text-xs self-center transition-all duration-200'>
              New to Monolink? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Login
