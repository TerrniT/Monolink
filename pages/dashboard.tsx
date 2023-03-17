import CardContainer from '@/components/CardContainer'
import { User } from '@supabase/supabase-js'
import DashboardSidebar from '@/components/DashboardSidebar'
import { FC } from 'react'
import { Navbar } from '@/components'

interface DashboardProps {
  user: User | undefined
}

const Dashboard: FC<DashboardProps> = ({ user }) => {
  return (
    <div className="flex min-h-screen w-full scrollbar relative">
      <DashboardSidebar />
      <main className='w-full flex-1 bg-white'>
        <div className=" rounded-l-xl ring-1 ring-zinc-800 flex-1 flex-col  duration-300 ">
          <Navbar />
          <CardContainer user={user} />
        </div>
      </main>

    </div>
  )
}

export default Dashboard


