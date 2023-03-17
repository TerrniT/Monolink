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

  const { controlTitleText } = useSidebar()

  return (
    <button className="my-2 flex w-full text-gray-500 transition-all duration-150  hover:text-gray-50 hover:bg-zinc-700 py-2 items-center justify-start rounded-md" >
      {icon}
      <motion.p
        animate={controlTitleText}
        className="text-sm font-semibold block"
      >

        {title}
      </motion.p>
      <div className='flex items-center'>
        {command && (<FiCommand />)}
        <span className='block'>{command}</span>
      </div>
    </button>
  )

}

export default CommandButton
