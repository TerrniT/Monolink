import { useState, useEffect } from 'react'
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs'

import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { supabase } from '@/utils/supabaseClient'
import { LinkDef } from '@/types'
import Card from '@/components/cardlink'
import Modal from '@/components/modal'
import { useAuthStore } from '@/store/store'
import SignOut from '@/components/SignOutButton'
import { data, datafooter } from '../utils/data'

const Dashboard = (props: any) => {
  const [active, setActive] = useState(false)
  const [title, setTitle] = useState<string | undefined>()
  const [desc, setDesc] = useState<string | undefined>()
  const [url, setUrl] = useState<string | undefined>()
  const [links, setLinks] = useState<LinkDef[]>()

  const { user } = useAuthStore((state) => ({
    user: state.user,
  }))

  const controls = useAnimation()
  const controlText = useAnimation()
  const controlTitleText = useAnimation()

  console.log('@@', user)

  const addNewLink = async () => {
    try {
      if (title && desc && url) {
        const { data, error } = await supabase
          .from('links')
          .insert({
            title: title,
            description: desc,
            url: url,
            user_id: user.data.user.id,
          })
          .select()
        if (error) throw error
        console.log('data: ', data)
      }
    } catch (error) {
      console.log('error: ', error)
    }
  }

  useEffect(() => {
    const getLinks = async () => {
      try {
        const { data, error } = await supabase
          .from('links')
          .select('id, title, description, url')
          .eq('user_id', user.data?.user.id)
        if (error) throw error
        setLinks(data)
      } catch (error) {
        console.log('error', error)
      }
    }

    getLinks()
  }, [props.session])

  const showMore = () => {
    controls.start({
      width: '250px',
      transition: { duration: 0.001 },
    })
    controlText.start({
      opacity: 1,
      display: 'block',
      transition: { delay: 0.3 },
    })
    controlTitleText.start({
      opacity: 1,
      transition: { delay: 0.3 },
    })

    setActive(true)
  }

  const showLess = () => {
    controls.start({
      width: '125px',
      transition: { duration: 0.001 },
    })

    controlText.start({
      opacity: 0,
      display: 'none',
    })

    controlTitleText.start({
      opacity: 0,
    })

    setActive(false)
  }

  useEffect(() => {
    showMore()
  }, [])

  return (
    <div className="flex min-h-screen bg-black">
      <motion.div
        animate={controls}
        className="animate group relative flex min-h-screen  max-w-[250px] flex-col border-r-2 border-gray-800 py-10 duration-300"
      >
        {active && (
          <div
            className="absolute -right-4 top-10 hidden h-8 w-8 cursor-pointer text-2xl text-white group-hover:block "
            onClick={showLess}
          >
            <BsFillArrowLeftSquareFill className=" text-white " />
          </div>
        )}
        {!active && (
          <BsFillArrowRightSquareFill
            onClick={showMore}
            className="absolute -right-4 top-12 cursor-pointer text-2xl text-white"
          />
        )}

        <div className="grow">
          {data.map((group, index) => (
            <div key={index} className="my-2">
              <motion.p
                animate={controlTitleText}
                className="mb-2 ml-4 text-sm font-bold text-gray-500"
              >
                {group.name}
              </motion.p>

              {group.items.map((item, index2) => (
                <div key={index2} className="flex cursor-pointer px-4 py-1">
                  <item.icon className="text-lg text-gray-500" />
                  <motion.p
                    animate={controlText}
                    className="ml-4 text-sm font-bold text-gray-400"
                  >
                    {item.title}
                  </motion.p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div>
          {datafooter.map((group, index) => (
            <div key={index} className="my-2">
              <motion.p
                animate={controlTitleText}
                className="mb-2 ml-4 text-sm font-bold text-gray-500"
              >
                {group.name}
              </motion.p>

              {group.items.map((item, index2) => (
                <div key={index2} className="flex cursor-pointer px-4 py-1">
                  <item.icon className="text-lg text-gray-500" />
                  <motion.p
                    animate={controlText}
                    className="ml-4 text-sm font-bold text-gray-400"
                  >
                    {item.title}
                  </motion.p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600">
            <Image
              src="/monolink.png"
              alt="profile picture"
              width={30}
              height={30}
            />
          </div>
          <div>
            <div className="flex items-center justify-center gap-1">
              <motion.h1 animate={controlText} className="text-sm font-bold">
                Gleb Kotovsky
              </motion.h1>

              {props.session?.user.role ? (
                <motion.p className="h-3 w-3 rounded-full bg-green-400"></motion.p>
              ) : null}
            </div>
            <motion.p
              animate={controlText}
              className="text-xs font-medium text-zinc-700 transition-all duration-150"
            >
              UI/UX Designer
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div className="animate min-h-screen flex-1 flex-col bg-zinc-900  duration-300 ">
        <motion.div className="animate flex h-24 flex-1 flex-col border-b-2 border-zinc-900 bg-black duration-300">
          {props.session ? <div>OK</div> : <SignOut />}
          <Modal />
        </motion.div>

        {/* Card provider */}

        <motion.div className="animate flex-1 bg-zinc-900  duration-300 ">
          <div className="flex w-full flex-wrap gap-2 p-1">
            {links?.map((link: LinkDef) => (
              <Card
                key={link.id}
                id={link.id}
                title={link.title}
                description={link.description}
                url={link.url}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Dashboard
