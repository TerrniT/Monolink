import { Tab } from '@headlessui/react'
import React, { Fragment } from 'react'

type Props = {
  children: string
}

const SettingsTab = ({ children }: Props) => {
  return (
    <Tab className="focus:outline-none">
      {({ selected }) => (
        <button className={`rounded-md ${selected ? 'bg-orange-700/20 ring-orange-700 text-orange-600' : 'bg-zinc-800/80'}  ring-1 ring-transparent py-1 min-w-[5rem] text-xs text-start px-3`}>
          {children}
        </button>
      )}
    </Tab>
  )
}

export default SettingsTab
