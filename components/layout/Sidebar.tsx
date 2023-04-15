import React from 'react'
import { useSidebar } from '@/hooks/'
import { motion } from "framer-motion"
import { SidebarBody, SidebarFooter, SidebarHeader, SidebarSwitcher } from '../sidebar'

const Sidebar = () => {
  const { active, showMore, showLess, controls, controlText, controlTitleText } = useSidebar()

  return (
    <motion.div
      animate={controls}
      className="group relative  max-w-[250px] px-6 flex-col py-10 duration-300 self-start"
    >
      <SidebarSwitcher active={active} showLess={showLess} showMore={showMore} />
      <SidebarHeader controlText={controlText} />
      <SidebarBody active={active} controlTitleText={controlTitleText} controls={controls} />
      <SidebarFooter active={active} controlTitleText={controlTitleText} controls={controls} />
    </motion.div >
  )
}

export default Sidebar
