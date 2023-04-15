import React from 'react'
import { motion } from "framer-motion"
import ViewFilters from '../ViewFilters'
import HelpPopover from '../HelpPopover'


const Navbar = () => {
  return (
    <motion.div className=" flex items-center justify-between px-6 py-6 rounded-tl-xl border-b-2  border-zinc-800 duration-300 bg-zinc-900  ">
      <ViewFilters />
      <HelpPopover />
    </motion.div>
  )
}

export default Navbar
