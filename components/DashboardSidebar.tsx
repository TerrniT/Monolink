import React from 'react'
import { data, datafooter } from '../utils/data'
import { useSidebar } from '@/hooks/'
import { motion } from "framer-motion"
import Image from "next/image"
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'


const DashboardSidebar = () => {
  const { active, showMore, showLess, controls, controlText, controlTitleText } = useSidebar()
  return (
    <motion.div
      animate={controls}
      className="animate group relative flex min-h-screen  max-w-[250px] flex-col py-10 duration-300"
    >
      {active && (
        <div
          className="absolute -right-4 top-12 z-40 hidden h-8 w-8 cursor-pointer text-2xl text-white group-hover:block "
          onClick={showLess}
        >
          <BsFillArrowLeftSquareFill className=" text-white " />
        </div>
      )}
      {!active && (
        <BsFillArrowRightSquareFill
          onClick={showMore}
          className="absolute -right-2  top-12 z-40 cursor-pointer text-2xl text-white group-hover:block hidden"
        />
      )}

      <div className="grow">
        {data.map((group, index) => (
          <div key={index} className="my-2">
            <motion.p
              animate={controlTitleText}
              className="mb-2 ml-4 text-sm font-bold text-gray-500"
            >
              {group.name}
            </motion.p>

            {group.items.map((item, index2) => (
              <div key={index2} className="flex cursor-pointer px-4 py-1">
                <item.icon className="text-lg text-gray-500" />
                <motion.p
                  animate={controlText}
                  className="ml-4 text-sm font-bold text-gray-400"
                >
                  {item.title}
                </motion.p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div>
        {datafooter.map((group, index) => (
          <div key={index} className="my-2">
            <motion.p
              animate={controlTitleText}
              className="mb-2 ml-4 text-sm font-bold text-gray-500"
            >
              {group.name}
            </motion.p>

            {group.items.map((item, index2) => (
              <div key={index2} className="flex cursor-pointer px-4 py-1">
                <item.icon className="text-lg text-gray-500" />
                <motion.p
                  animate={controlText}
                  className="ml-4 text-sm font-bold text-gray-400"
                >
                  {item.title}
                </motion.p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600">
          <Image
            src="/monolink.png"
            alt="profile picture"
            width={30}
            height={30}
          />
        </div>
        <div>
          <div className="flex items-center justify-center gap-1">
            <motion.h1 animate={controlText} className="text-sm font-bold">
              Gleb Kotovsky
            </motion.h1>

          </div>
          <motion.p
            animate={controlText}
            className="text-xs font-medium text-zinc-700 transition-all duration-150"
          >
            UI/UX Designer
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default DashboardSidebar
