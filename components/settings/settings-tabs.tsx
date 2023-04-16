import { Tab } from '@headlessui/react'
import React from 'react'
import SettingsPanel from './atoms/settings-panel'
import SettingsTab from './atoms/settings-tab'
import SettingsAccount from './settings-account'

const SettingsTabs = () => {
  return (
    <Tab.Group vertical={true}>
      <Tab.List className="flex-col flex max-w-xs gap-1">
        <SettingsTab>Account</SettingsTab>
        <SettingsTab>Apperance</SettingsTab>
        <SettingsTab>API</SettingsTab>
      </Tab.List>
      <Tab.Panels className="flex flex-col w-full">
        <SettingsPanel heading='Account'>
          <SettingsAccount />

        </SettingsPanel>
        <SettingsPanel heading='Apperance' />
        <SettingsPanel heading='Api' />
      </Tab.Panels>
    </Tab.Group>
  )
}

export default SettingsTabs 
