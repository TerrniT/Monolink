import React from 'react'

type Props = {
  active: boolean
}

const Divider = ({ active }: Props) => {
  return (
    <div className={`h-[2px] ${!active ? "bg-zinc-700" : "bg-transparent"}  w-10  mt-4 self-start rounded transition-all duration-300`}></div >
  )
}

export default Divider
