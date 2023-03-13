import React, { useState } from 'react'
import Button from '@/components/atoms/button'
import Link from 'next/link'
import { supabase } from '@/utils/supabaseClient'
import { toast } from 'react-toastify'

const SignUp = () => {
  const [password, setPassword] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<string>('')

  const notify = () => {
    toast('Sorry! This might not working', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const handleInput = (e: any) => {
    e.preventDefault()
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: 'http:localhost:3000/dashboard',
        },
      },)

      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex  w-full items-center justify-center bg-black">
      <div className="max-w-6xl bg-[#0e0e0e] flex flex-col  lg:items-start items-center justify-center  lg:flex-row w-full ">
        <div className="lg:w-1/2 w-full pt-24 lg:pl-24 px-2  border-0 lg:border-r-[1px] border-gray-stroke">
          <h1 className="text-[44px] font-bold w-full">Start organize your web experience</h1>
          <p className="text-p font-normal max-w-sm mt-[28px] w-full text-gray-stroke">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
          <div className='mt-[30px] lg:w-[386px] '>
            <Button title="Sign in with Metamask" icon="metamask" className='bg-transparent border-[1px] border-gray-stroke text-xs text-white font-normal p-2 mb-3' onClick={notify} />
            <Button title="Sign in with Github" icon="github" className='bg-transparent border-[1px] border-gray-stroke text-xs text-white font-normal p-2 mb-3' onClick={notify} />
            <Button title="Sign in with Google" icon="google" className='bg-transparent border-[1px] border-gray-stroke text-xs text-white font-normal p-2 mb-3' onClick={() => notify} />
            <div className='flex items-center my-[34px]'>
              <div className='h-[1px] w-full bg-gray-stroke'></div>
              <p className='text-gray-500 uppercase font-medium px-2'>or</p>
              <div className='h-[1px] w-full bg-gray-stroke'></div>
            </div>

            <div className='flex flex-col gap-1 mb-[30px]'>
              <div className='flex items-start justify-start gap-1 '>
                <label className='text-white font-medium text-p'>Get Magic Link</label>
                <p className='text-accent-green font-bold'>*</p>
              </div>
              <input className='bg-transparent rounded-[10px] border-[1px] border-gray-stroke placeholder:text-gray-stroke text-xs p-3' type="email" placeholder='example@gmail.com' value={email} onChange={(e: any) => setEmail(e.target.value)} />
            </div>
            <Button title={loading ? 'Loading' : 'Login'} className='bg-accent-green-second text-p text-black font-medium p-3' onClick={() => handleLogin(email)} disabled={loading} />
            <div className='mt-[30px]'>
              <p className='text-gray-stroke text-xs self-start'> Already have an account
                <Link href="/login" className='hover:text-accent-green-second text-accent-green text-xs font-medium pl-2 self-center transition-all duration-200'>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full  pt-36 lg:pl-20 pl-2 h-screen relative ">
          <img src="app_screen.png" className='object-fill w-full' />
        </div>
      </div >

    </div>
  )
}

export default SignUp 
