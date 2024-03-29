import React, { ReactNode } from 'react'
import { AnimationControls, motion } from "framer-motion"
import { FiCommand } from 'react-icons/fi'



export interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: ReactNode
  command?: string
  title: string
  controls: AnimationControls
  controlTitleText: AnimationControls
  children?: any
}



const CommandButton = ({ icon, command, title, controls, controlTitleText, onClick, children }: Props) => {
  return (

    <button className="my-2 h-10 flex w-full text-gray-500 transition-all duration-150  hover:text-gray-50 hover:bg-zinc-900 py-2 items-center justify-between rounded-md" onClick={onClick} >
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
        <div className='flex items-center gap-1 text-gray-300 pr-2 text-[11px]'>
          <motion.p animate={controlTitleText} className='flex items-center p-1 justify-center text-center bg-zinc-700/20 rounded border border-zinc-700 group-hover:bg-black'><FiCommand /></motion.p>
          <motion.p animate={controlTitleText} className='px-1.5 py-0.5 bg-zinc-700/20 rounded border border-zinc-700 group-hover:bg-black'>{command}</motion.p>
        </div>
      )}
      {children}
    </button>
  )

}

export default CommandButton
