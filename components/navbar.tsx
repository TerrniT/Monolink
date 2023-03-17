import React from 'react'
import { motion } from "framer-motion"
import CreateDropdownMenu from './CreateDropdownMenu'
import Link from 'next/link'


const Navbar = () => {
  return (
    <motion.div className="animate flex h-24 flex-1 items-center justify-end px-3  border-b-2 border-zinc-800 duration-300">
      <Link href="/home">Home</Link>
    </motion.div>
  )
}

export default Navbar
