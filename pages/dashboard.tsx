import LinkContainer from '@/components/link/LinkContainer'
import { User } from '@supabase/supabase-js'
import Sidebar from '@/components/layout/Sidebar'
import Navbar from '@/components/layout/navbar'
import { FC } from "react"

interface DashboardProps {
  user: User | undefined
}

const Dashboard: FC<DashboardProps> = ({ user }) => {
  return (
    <div className="flex min-h-screen w-full scrollbar relative">
      <Sidebar />
      <main className='w-full flex-1 bg-white'>
        <div className=" rounded-l-xl ring-1 ring-zinc-800 flex-1 flex-col  duration-300 ">
          <Navbar />
          <LinkContainer user={user} />
        </div>
      </main>
    </div>
  )
}

export default Dashboard


