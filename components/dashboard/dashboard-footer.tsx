import React from 'react'
import Divider from '../atoms/divider'
import Profile from '../Profile'
import { AnimationControls } from "framer-motion"

type Props = {
  active: boolean
  controls: AnimationControls
  controlTitleText: AnimationControls
}

const DashboardFooter = ({ active, controls, controlTitleText }: Props) => {
  return (
    <div className=''>
      <Divider active={active} />
      <Profile controls={controls} controlTitleText={controlTitleText} />
    </div>

  )
}

export default DashboardFooter
