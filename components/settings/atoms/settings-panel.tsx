import { Tab } from '@headlessui/react'
import React from 'react'

type Props = {
  heading: string
  children?: any
}

const SettingsPanel = ({ heading, children }: Props) => {
  return (
    <Tab.Panel>
      <section className='px-5 w-full '>
        <h2 className='text-xl'>{heading}</h2>
        <div className='mt-4 border-t-2 border-t-zinc-700 w-full py-8 rounded-sm'>{children}</div>
      </section>
    </Tab.Panel>
  )
}

export default SettingsPanel
