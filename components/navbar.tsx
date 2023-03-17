import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import Profile from './Profile'


const Navbar = () => {
  return (
    <motion.div className="h-24 flex items-center justify-end px-6 z-40 border-b-2 border-zinc-800 duration-300 bg-zinc-900 ">
      <Link href="/home">Home</Link>
      <Profile />
    </motion.div>
  )
}

export default Navbar
