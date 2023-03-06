import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="fixed  top-0 flex h-[90px] w-full  border-b border-zinc-600 bg-black/20 px-9 backdrop-blur-md " >
      <Link href="/" className="flex items-center">
        <Image src="/monolink-rev.svg" height={42} width={42} alt="logo" />
        <h1 className="pl-3 text-2xl font-bold">Monolink</h1>
      </Link>
    </nav>
  )
}

export default Navbar
