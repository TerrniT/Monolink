import SettingsTabs from '@/components/settings/settings-tabs'
import { NextPage } from 'next'
import React from 'react'


const Settings: NextPage = () => {
  return (
    <div className='p-6 flex flex-col'>
      <div className=''>
        <h1 className='text-xl font-medium'>Settings Page</h1>
      </div>
      <div className='bg-zinc-800/90  w-full h-fit p-6 rounded-md mt-8 flex ' >
        <SettingsTabs />
      </div>
    </div>
  )
}

export default Settings

