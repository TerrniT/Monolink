import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <div className="mx-auto flex h-screen w-full flex-shrink ">
      <div className="mx-auto flex items-center justify-center gap-6">
        <Link
          className="rounded-md border border-zinc-600 px-6 py-3"
          href="/login"
        >
          Log In
        </Link>

        <Link
          className="rounded-md border border-zinc-600 px-6 py-3"
          href="/signup"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default index
