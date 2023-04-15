import React from 'react'
import { motion } from "framer-motion"
import ViewFilters from '../ViewFilters'


const Navbar = () => {
  return (
    <motion.div className="h-24 flex items-center justify-start px-6 z-40 border-b-2 border-zinc-800 duration-300 bg-zinc-900 ">
      <ViewFilters />
    </motion.div>
  )
}

export default Navbar
