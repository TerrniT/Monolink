import React from 'react'
import Image from 'next/image'
import { AnimationControls, motion } from "framer-motion"

type Props = {
  controlText: AnimationControls
}

const DashboardHeader = ({ controlText }: Props) => {
  return (
    <div className="flex ">
      <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-gray-600">
        <Image
          src="/monoling-png.png"
          alt="profile picture"
          width={30}
          height={30}
        />
      </div>
      <div className=''>
        <div className="flex items-center justify-start gap-1">
          <motion.h1 animate={controlText} className=" text-sm font-bold pl-2">
            Monolink
          </motion.h1>

        </div>
        <motion.p
          animate={controlText}
          className="text-xs font-medium text-zinc-700 transition-all duration-150 pl-2 "
        >
          release 1.01.2
        </motion.p>
      </div>
    </div>
  )
}

export default DashboardHeader
