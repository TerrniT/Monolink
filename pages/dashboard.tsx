import CardContainer from '@/components/CardContainer'
import { User } from '@supabase/supabase-js'
import DashboardSidebar from '@/components/DashboardSidebar'

interface DashboardProps {
  user: User | undefined
}

const Dashboard = ({ user }: DashboardProps) => {
  return (
    <div className="flex min-h-screen bg-black w-full">
      <DashboardSidebar />
      <CardContainer user={user} />
    </div>
  )
}

export default Dashboard


