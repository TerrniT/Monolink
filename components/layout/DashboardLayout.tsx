import React from 'react'
import Navbar from './navbar'
import Sidebar from './Sidebar'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {

  return (
    <div className="flex max-h-screen w-full scrollbar relative">
      <Sidebar />
      <main className='w-full flex-1 overflow-hidden'>
        <Navbar />
        <div className="rounded-l-xl ring-1 ring-zinc-800 flex-1 flex-col  duration-300 h-screen bg-zinc-900">
          {children}
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout 
