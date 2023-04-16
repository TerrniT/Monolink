import { useSession } from '@/hooks'
import Login from '@/pages/login'
import React from 'react'
import Sidebar from './Sidebar'

type Props = {
  children: any
}

const Layout = ({ children }: Props) => {

  const { data } = useSession()

  if (data?.session == null) {
    return <Login />
  }
  return (
    <div className="flex min-h-screen w-full scrollbar relative">
      {data?.session ? (
        <Sidebar />
      ) : null}
      <main className='w-full flex-1 '>
        <div className="rounded-l-xl ring-1 ring-zinc-800 flex-1 flex-col  duration-300 h-screen bg-zinc-900">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
