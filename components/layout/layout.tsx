import React from 'react'
import Navbar from './navbar'
import Sidebar from './Sidebar'

type Props = {}

const Layout = (props: Props) => {
  return (
    <>
      <Sidebar />
      <Navbar />
    </>
  )
}

export default Layout
