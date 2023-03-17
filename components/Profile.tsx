import React from 'react'
import { motion } from "framer-motion"
import { useSidebar } from '@/hooks'
import Image from "next/image"


const Profile = () => {

  const { controlText, controls } = useSidebar()
  return (

    <motion.div className="flex gap-2" animate={controls} >
      <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-gray-600">
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
    </motion.div>
  )
}

export default Profile
