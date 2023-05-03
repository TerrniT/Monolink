import { useSession } from '@/hooks'
import React from 'react'
import Image from 'next/image'
import { Button } from '../atoms'
import { AuthService } from '@/service/auth.service'
import { useRouter } from 'next/router'

const SettingsAccount = () => {
  const { data: session } = useSession()
  const navigate = useRouter()

  const handleSignOut = () => {
    AuthService.signOut()

    navigate.push("/")

  }

  return (
    <>
      {session ? (
        <div className="flex pb-8 items-center rounded-sm border-b-2 border-b-zinc-700 w-full"  >
          <div className="flex h-14 w-14 ml-1 mr-3 items-center justify-center rounded-full ring ring-gray-800">
            <Image
              src={session.session?.user.user_metadata.avatar_url}
              alt="profile picture"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className='flex flex-col ml-1 '>
            <div className="flex items-center">
              <h1 className="text-base font-bold">
                {session.session?.user.user_metadata.name}
              </h1>
            </div>
            <p
              className="text-sm font-medium text-zinc-500 "
            >
              #{session.session?.user.user_metadata.user_name}
            </p>

            <p
              className="text-sm font-medium text-zinc-600 "
            >
              {session.session?.user.email}
            </p>
          </div>
        </div>
      ) : null}

      <div className="flex pb-8 items-center rounded-sm border-b-2 border-b-zinc-700 w-full"  >
        <div className='py-8'>
          <h3 className='text-md font-medium'>Log out </h3>
          <p className='text-base text-zinc-600 pb-4'>Log out of all other active sessions on other devices besides this one.</p>
          <Button
            title='Log Out'
            className='bg-transparent duration-100 transition-all hover:bg-red-500/20 ring-1 ring-red-500 text-red-500 text-xs text-center  w-14 p-1' onClick={handleSignOut} />
        </div>
      </div>
    </>
  )
}

export default SettingsAccount
