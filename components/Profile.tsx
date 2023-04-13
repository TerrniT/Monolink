import React from 'react'
import { AnimationControls, motion } from "framer-motion"
import Image from "next/image"
import { useSession } from '@/hooks'

type Props = {
  controls: AnimationControls
  controlTitleText: AnimationControls
}

const Profile = ({ controls, controlTitleText }: Props) => {

  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <motion.div className="flex gap-2 my-2" animate={controls} >
          <div className="flex h-8 w-8 ml-1 items-center justify-center rounded-full ring ring-gray-800">
            <Image
              src={session.session?.user.user_metadata.avatar_url}
              alt="profile picture"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className='flex flex-col ml-1'>
            <div className="flex items-center justify-center">
              <motion.h1 animate={controlTitleText} className="text-xs font-bold">
                {session.session?.user.user_metadata.name}
              </motion.h1>
            </div>
            <motion.p
              animate={controlTitleText}
              className="text-xs font-medium text-zinc-700 "
            >

              #{session.session?.user.user_metadata.user_name}
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </>
  )
}

export default Profile
