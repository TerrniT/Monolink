import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { AddLink } from '@/components'
import { useSession } from "@/hooks/"
import LinkContainer from '@/components/link/LinkContainer';
import DashboardLayout from '@/components/layout/DashboardLayout';

const Dashboard: NextPage = () => {
  const router = useRouter()
  const { data } = useSession()

  useEffect(() => {
    if (data) {
      router.push("/")
    }
  }, [data])

  return (
    <DashboardLayout>
      <div className="mx-auto flex h-screen w-full ">
        <LinkContainer user={data?.session?.user} />
        <AddLink />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
