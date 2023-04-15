import LinkContainer from '@/components/link/LinkContainer'
import { User } from '@supabase/supabase-js'
import { FC } from "react"
import Navbar from '@/components/layout/navbar'

interface DashboardProps {
  user: User | undefined
}

const Dashboard: FC<DashboardProps> = ({ user }) => {
  return (
    <div className='flex w-full flex-col '>
      <Navbar />
      <LinkContainer user={user} />
    </div>
  )
}

export default Dashboard


