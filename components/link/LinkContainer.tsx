import React from 'react'
import { motion } from "framer-motion"
import { User } from '@supabase/supabase-js'
import { getLinks } from '@/service/link.service'
import { useQuery } from '@tanstack/react-query'
import SkeletonCardList from '../ui/skeleton/SkeletonCardList'
import ListView from './views/ListView'
import CardView from './views/CardView'
import HelpPopover from '../HelpPopover'
import CommandPallete from '../CommandPallete'
import { useFilterViewStore } from '@/store/store'

type Props = {
  user: User | undefined
}
const LinkContainer = ({ user }: Props) => {
  // @ts-ignore
  const { data, isLoading } = useQuery(['links'], () => getLinks(user.id))

  const { listView } = useFilterViewStore((state) => ({
    listView: state.listView,
  }))

  return (
    <>
      <motion.div className="min-h-screen flex-1 bg-zinc-900 px-3 duration-300  ">
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
      <HelpPopover />
    </>
  )
}

export default LinkContainer
