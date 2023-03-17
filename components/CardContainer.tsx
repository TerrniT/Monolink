import React from 'react'
import { motion } from "framer-motion"
import { User } from '@supabase/supabase-js'
import { Navbar } from '.'
import { getLinks } from '@/service/link.service'
import { useQuery } from '@tanstack/react-query'
import SkeletonCardList from './ui/skeleton/SkeletonCardList'
import CardList from './CardList'
import HelpPopover from './HelpPopover'
import CommandPallete from './CommandPallete'

type Props = {
  user: User | undefined
}
const CardContainer = ({ user }: Props) => {
  // @ts-ignore
  const { data, isLoading } = useQuery(['links'], () => getLinks(user.id))

  return (
    <>
      <motion.div className="min-h-screen flex-1 bg-zinc-900 px-3 duration-300  ">
        <div className=" w-full pt-6 grid grid-cols-4 gap-4">
          {isLoading ? (<SkeletonCardList />) : (<CardList data={data} />)}
        </div>
      </motion.div>
      <CommandPallete data={data} />
      <HelpPopover />
    </>
  )
}

export default CardContainer
