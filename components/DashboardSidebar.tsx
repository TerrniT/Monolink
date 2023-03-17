import React from 'react'
import { data } from '../utils/data'
import { useSidebar, useSession } from '@/hooks/'
import { motion } from "framer-motion"
import Image from "next/image"
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import CommandButton from './atoms/sidebar-atoms/CommandButton'
import { FiLink, FiSearch, FiSettings } from 'react-icons/fi'
import AddLink from './AddLink'
import CreateDropdownMenu from './CreateDropdownMenu'


const DashboardSidebar = () => {
  const { active, showMore, showLess, controls, controlText, controlTitleText } = useSidebar()

  const { data: session } = useSession()

  return (
    <motion.div
      animate={controls}
      className="animate group relative  flex min-h-screen max-w-[250px] flex-col py-10 duration-300 self-start"
    >
      <div className="flex px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-gray-600">
          <Image
            src="/monolink.png"
            alt="profile picture"
            width={30}
            height={30}
          />
        </div>
        <div className=''>
          <div className="flex items-center justify-center gap-1">
            <motion.h1 animate={controlText} className="text-sm font-bold pl-2">
              Gleb Kotovsky
            </motion.h1>

          </div>
          <motion.p
            animate={controlText}
            className="text-xs font-medium text-zinc-700 transition-all duration-150 pl-2 "
          >
            UI/UX Designer
          </motion.p>
        </div>
      </div>

      {active && (
        <div
          className="absolute -right-3 top-12 z-40 hidden h-8 w-8 cursor-pointer text-2xl text-white group-hover:block "
          onClick={showLess}
        >
          <BsFillArrowLeftSquareFill className=" text-white " />
        </div>
      )}
      {!active && (
        <BsFillArrowRightSquareFill
          onClick={showMore}
          className="absolute -right-3 top-12 z-40 cursor-pointer text-2xl text-white group-hover:block hidden"
        />
      )}
      <div className={`h-[2px] ${!active ? "bg-zinc-700" : "bg-transparent"}  w-10 ml-6 mt-4 self-start rounded transition-all duration-300`}></div>

      <div className="px-6 mt-2">
        <CommandButton title='Links' icon={<FiLink className='w-10 text-md' />} command="" />
        <CommandButton title='Search' icon={<FiSearch className='w-10 text-md' />} command="K" />
        {data.map((item, index) => (
          <button key={index} className="my-2 flex w-full text-gray-500 transition-all duration-150  hover:text-gray-50 hover:bg-zinc-700 py-2 items-center justify-start rounded-md" >
            <item.icon className="text-md  w-10" />
            <motion.p
              animate={controlTitleText}
              className="text-sm font-semibold block"
            >
              {item.title}
            </motion.p>
          </button>
        ))}

        <CreateDropdownMenu />
      </div>

    </motion.div >
  )
}

export default DashboardSidebar
