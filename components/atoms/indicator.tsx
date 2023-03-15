import React from 'react'
import { FiExternalLink } from 'react-icons/fi'


interface Props {
  url: string
}

const Indicator = ({ url }: Props) => {
  return (
    <div className='absolute -right-2 -top-2 '><a className='bg-white rounded-full inline-flex p-1 text-black hover:text-white hover:ring-white ring-1 ring-white hover:bg-black' rel="noreferrer" target="_blank" href={url}><FiExternalLink className='text-lg ' /></a></div>
  )
}

export default Indicator
