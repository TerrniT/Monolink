import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { User } from '@supabase/supabase-js'
import { getLinks } from '@/service/link.service'
import { useQuery } from '@tanstack/react-query'
import SkeletonCardList from '../ui/skeleton/SkeletonCardList'
import ListView from './views/ListView'
import CardView from './views/CardView'
import CommandPallete from '../CommandPallete'
import { useCounterStore, useFilterViewStore } from '@/store/store'

type Props = {
  user: User | undefined
}
const LinkContainer = ({ user }: Props) => {
  const { setCounter, counter } = useCounterStore((state) => ({
    setCounter: state.setCounter,
    counter: state.counter
  }))

  // @ts-ignore
  const { data, isLoading } = useQuery(['links'], () => getLinks(user.id))

  const { listView } = useFilterViewStore((state) => ({
    listView: state.listView,
  }))

  useEffect(() => {
    if (data?.length) {
      setCounter(data?.length)
    }
  }, [counter, data?.length])

  return (
    <>
      <motion.div className=" flex-1 bg-zinc-900 px-3 duration-300 h-screen overflow-auto ">
        {data?.length == 0 && (
          <div className='mx-auto flex text-center mt-10 ml-10'>No created cards yet</div>
        )}
        {listView ? (
          <div className=" w-full pt-6 grid grid-cols-1 gap-2">
            {isLoading ? (<SkeletonCardList />) : (<ListView data={data} />)}
          </div>
        ) : (
          <div className=" w-full pt-6 grid grid-cols-4 gap-4">
            {isLoading ? (<SkeletonCardList />) : (<CardView data={data} />)}
          </div>
        )}
      </motion.div>
      <CommandPallete data={data} />
    </>
  )
}

export default LinkContainer
