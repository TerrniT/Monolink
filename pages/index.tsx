import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import useUser from "../hooks/useUser"
import Dashboard from './dashboard'
import 'react-toastify/dist/ReactToastify.css';
import { AddLink } from '@/components'


const Home: NextPage = () => {
  const router = useRouter()
  const { data, isLoading } = useUser()

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/")
    }

  }, [])

  if (isLoading) {
    return <div>IsLoading</div>
  }


  return (
    <div className="mx-auto flex h-screen w-full ">
      <Dashboard user={data?.session?.user} />
      <AddLink />
    </div>
  )
}

export default Home 
