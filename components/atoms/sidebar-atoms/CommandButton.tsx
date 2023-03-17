import { useSidebar } from '@/hooks'
import React, { ReactNode } from 'react'
import { IconType } from 'react-icons/lib'
import { motion } from "framer-motion"
import { FiCommand } from 'react-icons/fi'

interface Props {
  icon: ReactNode
  command: string
  title: string
}


const CommandButton = ({ icon, command, title }: Props) => {


  const { active, showMore, showLess, controls, controlText, controlTitleText } = useSidebar()

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
        <div className='flex items-center gap-1 '>
          <FiCommand className='  block text-md rounded border border-zinc-400 bg-zinc-700' />
          <span className='block text-xs  w-4 h-4 bg-zinc-700 rounded border border-zinc-400'>{command}</span>
        </div>
      )}
    </button>
  )

}

export default CommandButton
