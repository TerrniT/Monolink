import React from 'react'

type Props = {
  children: any
}

const LoginLayout = ({ children }: Props) => {
  return (
    <div className=''>
      <h2 className='text-white'>Lmao</h2>
      {children}
    </div>
  )
}

export default LoginLayout
