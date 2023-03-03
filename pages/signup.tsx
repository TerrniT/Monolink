import React, { useState } from 'react'
import Image from 'next/image'
import { supabase } from '@/utils/supabaseClient'

const SignUp = () => {
  const [email, setEmail] = useState<string | undefined>()
  const [password, setPassword] = useState<string | undefined>()

  async function signUpWithEmail() {
    try {
      if (email && password) {
        const response = await supabase.auth.signUp({
          email: email,
          password: password,
        })
        if (response.error) throw response.error
        const userId = response.data.user?.id
        console.log(userId)
      }
    } catch {}
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-800">
      <div className="rounded-xl bg-black bg-opacity-50 px-16 py-10 shadow-lg filter backdrop-blur-lg backdrop-filter max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <div className="flex flex-row items-center justify-center gap-2">
              <h1 className="mb-2 text-2xl">Monolink</h1>
              <Image
                src="/monolink.svg"
                width={24}
                height={24}
                alt="Monolink logo"
              />
            </div>
            <span className="mt-5 text-gray-300">Enter Login Details</span>
          </div>
          <form action="#" className="flex flex-col">
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-3 text-center text-inherit placeholder-gray-500 shadow-lg outline-none backdrop-blur-md"
                type="email"
                name="email"
                id="email"
                placeholder="enter your email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-3 text-center text-inherit placeholder-gray-500 shadow-lg outline-none backdrop-blur-md"
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              type="button"
              className="mt-4 self-center rounded-3xl border border-gray-400 bg-black bg-opacity-50 px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-zinc-800"
              onClick={signUpWithEmail}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
