import { useSidebar } from '@/hooks'
import React, { ReactNode } from 'react'
import { IconType } from 'react-icons/lib'
import { AnimationControls, motion } from "framer-motion"
import { FiCommand } from 'react-icons/fi'

interface Props {
  icon: ReactNode
  command: string
  title: string
  controls: AnimationControls
  controlTitleText: AnimationControls
}



const CommandButton = ({ icon, command, title, controls, controlTitleText }: Props) => {



  return (

    <button className="my-2 h-10 flex w-full text-gray-500 transition-all duration-150  hover:text-gray-50 hover:bg-zinc-700 py-2 items-center justify-between rounded-md" >
      <motion.div animate={controls} className='flex items-center'>
        {icon}
        <motion.p
          animate={controlTitleText}
          className="text-sm font-semibold block"
        >
          {title}
        </motion.p>
      </motion.div>
      {command && (
        <div className='flex items-center gap-1 text-gray-300 pr-2 text-[12px]'>
          <motion.p animate={controlTitleText} className='flex items-center p-1 justify-center text-center  bg-zinc-700/20 rounded border border-zinc-700'><FiCommand /></motion.p>
          <motion.p animate={controlTitleText} className=' px-2 py-0.5 bg-zinc-700/20 rounded border border-zinc-700'>{command}</motion.p>
        </div>
      )}
    </button>
  )

}

export default CommandButton
