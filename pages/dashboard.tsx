import CardContainer from '@/components/CardContainer'
import { User } from '@supabase/supabase-js'
import DashboardSidebar from '@/components/DashboardSidebar'
import { FC } from 'react'

interface DashboardProps {
  user: User | undefined
}

const Dashboard: FC<DashboardProps> = ({ user }) => {
  return (
    <div className="flex min-h-screen bg-black w-full scrollbar">
      <DashboardSidebar />
      <CardContainer user={user} />
    </div>
  )
}

export default Dashboard


