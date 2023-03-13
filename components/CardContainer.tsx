import React from 'react'
import { motion } from "framer-motion"
import { User } from '@supabase/supabase-js'
import { Navbar } from '.'
import { LinkService } from '@/service/link.service'
import { useQuery } from '@tanstack/react-query'
import SkeletonCardList from './ui/skeleton/SkeletonCardList'
import CardList from './CardList'

type Props = {
  user: User | undefined
}
const CardContainer = ({ user }: Props) => {

  // @ts-ignore
  const { data, isLoading } = useQuery(['links'], () => LinkService.getLinks(user.id))

  return (
    <motion.div className="animate min-h-screen rounded-l-xl ring-1 ring-zinc-800 flex-1 flex-col bg-zinc-900 w-full  duration-300 ">
      <Navbar />
      <motion.div className="animate flex-1 bg-zinc-900 px-3 duration-300 ">
        <div className=" w-full pt-6 grid grid-cols-4 gap-4">
          {isLoading ? (<SkeletonCardList />) : (<CardList data={data} />)}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default CardContainer
