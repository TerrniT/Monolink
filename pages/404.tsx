import Link from 'next/link'
import React from 'react'

type Props = {}

const Error = (props: Props) => {
  return (
    <div className='mx-auto w-full h-screen flex justify-center items-start flex-col max-w-md'>
      <h1
        className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-400 to-yellow-300 pb-6"
      >
        404 error
      </h1>
      <h3 className="text-xl font-medium pb-4">Something went wrong, maybe this page don't exist</h3>
      <Link href="/" className='underline underline-offset-4 hover:underline-offset-8 font-bold hover:font-black text-white hover:text-accent-green self-start'>Go back</Link>
    </div>
  )
}

export default Error
