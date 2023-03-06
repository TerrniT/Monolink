import React, { useState } from 'react'
import Button from '@/components/atoms/button'
import Link from 'next/link'

const Login = () => {
  const [email, setEmail] = useState<string | undefined>()
  const [password, setPassword] = useState<string | undefined>()

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
            <input className='bg-transparent rounded-[10px] border-[1px] border-gray-stroke placeholder:text-gray-stroke text-xs p-3' type="email" placeholder='example@gmail.com' />
          </div>

          <div className='flex flex-col gap-1 mb-[30px]'>
            <div className='flex items-start justify-start gap-1'>
              <label className='text-white font-medium text-p'>Password</label>
              <p className='text-accent-green font-bold'>*</p>
            </div>
            <input className='bg-transparent rounded-[10px] border-[1px] border-gray-stroke placeholder:text-gray-stroke text-xs p-3' type="password" placeholder='Your password' />
          </div>

          <div className='flex flex-col gap-2 mb-[30px]'>
            <div className='flex items-start justify-start gap-1'>
              <label className='text-white font-medium text-p'>
                <Link href="/" className='hover:text-accent-green-second transition-all duration-200'>
                  Forgot password?
                </Link>
              </label>
            </div>
            <Button title="Log In" className='bg-accent-green-second text-p text-black font-medium p-3 ' />
            <div className='flex items-center my-[34px]'>
              <div className='h-[1px] w-full bg-gray-stroke'></div>
              <p className='text-gray-500 uppercase font-medium px-2'>or</p>
              <div className='h-[1px] w-full bg-gray-stroke'></div>
            </div>
            <Button title="Sign in with Metamask" icon="metamask" className='bg-transparent border-[1px] border-gray-stroke text-xs text-white font-normal p-2 mb-3 ' />
            <Button title="Sign in with Github" icon="github" className='bg-transparent border-[1px] border-gray-stroke text-xs text-white font-normal p-2 mb-3' />
            <Button title="Sign in with Google" icon="google" className='bg-transparent border-[1px] border-gray-stroke text-xs text-white font-normal p-2 mb-3' />
            <Link href="/" className='hover:text-accent-green-second text-accent-green text-xs self-center transition-all duration-200'>
              New to Monolink? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Login
