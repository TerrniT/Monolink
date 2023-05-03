import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Dashboard from './dashboard'
import 'react-toastify/dist/ReactToastify.css';
import { AddLink } from '@/components'
import { useSession } from "@/hooks/"
import Loading from './loading';
import Layout from '@/components/layout/layout';


const Home: NextPage = () => {
  const router = useRouter()
  const { data, isLoading } = useSession()

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/login")
    }
  }, [])

  if (isLoading) {
    return <Loading />
  }


  return (
    <div className="mx-auto flex h-screen w-full ">
      <Dashboard user={data?.session?.user} />
      <AddLink />
    </div>
  )
}

export default Home 
