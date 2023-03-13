import React from 'react'
import { motion } from "framer-motion"
import CreateDropdownMenu from './CreateDropdownMenu'


const Navbar = () => {
  return (
    <motion.div className="animate flex h-24 flex-1 items-center justify-end px-3  border-b-2 border-zinc-800 duration-300">
      <CreateDropdownMenu />
    </motion.div>
  )
}

export default Navbar
