import React from 'react'
import { motion, AnimationControls } from 'framer-motion'
import Divider from '../atoms/divider'
import { FiLink, FiSearch } from 'react-icons/fi'
import { data } from '@/utils/data'
import CreateDropdownMenu from '../CreateDropdownMenu'
import CommandButton from './atoms/CommandButton'
import { Router, useRouter } from 'next/router'
import LinkCounter from './atoms/link-counter'

type Props = {
  active: boolean
  controls: AnimationControls
  controlTitleText: AnimationControls
}

const SidebarBody = ({ active, controls, controlTitleText }: Props) => {
  const navigate = useRouter()

  return (
    <div className="mt-2">
      <Divider active={active} />
      <CommandButton
        title='Links'
        icon={<FiLink className='w-10 text-md' />}
        controlTitleText={controlTitleText}
        controls={controls}
        onClick={() => navigate.push("/")}
      >
        <LinkCounter isShow={active} />
      </CommandButton>
      <CommandButton title='Search' icon={<FiSearch className='w-10 text-md' />} command="K" controlTitleText={controlTitleText} controls={controls} />
      {data.map((item, index) => (
        <button key={index} className="my-2 h-10 flex w-full text-gray-500 transition-all duration-150  hover:text-gray-50 hover:bg-zinc-900 py-2 items-center justify-between rounded-md" onClick={() => navigate.push(item.navigate)} >
          <motion.div animate={controls} className='flex items-center'>
            <item.icon className="text-sm  w-10" />
            <motion.p
              animate={controlTitleText}
              className="text-sm font-semibold block"
            >
              {item.title}
            </motion.p>
          </motion.div>
        </button>
      ))}
      <div className=''>
        <Divider active={active} />
        <CreateDropdownMenu controlTitleText={controlTitleText} />
      </div>
    </div>
  )
}

export default SidebarBody
