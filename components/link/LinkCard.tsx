import React from 'react'
import Image from 'next/image'
import { LinkDef } from '@/types'
// @ts-ignore
import faviconFetch from 'favicon-fetch'
import LinkDropmenu from './LinkDropmenu'
import useOnHover from '@/hooks/useOnHover'
import Indicator from '../atoms/indicator'

const LinkCard = (props: LinkDef) => {
  const { isShown, handleMouseEnter, handleMouseOut } = useOnHover()

  return (
    <div
      key={props.id}
      className="shadow-1xl relative min-h-[10rem] rounded-2xl bg-black/30 ring-1 ring-white/10 hover:ring-2 hover:ring-white duration-100 transition-all "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      {isShown && <Indicator url={props.url} />}
      <div className=" flex h-full flex-col justify-between  ">
        <div className="flex items-center  justify-between px-6 py-4  ">
          <div className="w-full flex justify-between ">
            <div className="flex items-center w-full ">
              <div className=" flex h-8 w-8 flex-shrink-0 ">
                <a
                  href={props.url}
                  rel="noreferrer"
                  target="_blank"
                  className="block self-center"
                >
                  <Image
                    src={props.url ? faviconFetch({ uri: props.url }) : "/monolink-rev.svg"}
                    width={26}
                    height={26}
                    className="object-contain "
                    alt={props.title}
                    aria-hidden
                  />
                </a>
              </div>
              <div className='flex flex-col w-full'>
                <div className="text-sm font-bold w-full ">{props.title}</div>
                {props.tags.tag_name && (
                  <span className=" px-1 h-3 font-bold w-fit mt-1  py-1 items-center justify-center flex rounded-full text-[10px]" style={{ backgroundColor: `${props.tags.color}` }}>
                    {props.tags.tag_name}
                  </span>
                )}
              </div>
              <LinkDropmenu {...props} />
            </div>
          </div>
        </div>
        <div className="flex-grow px-6 pt-1 pb-4 text-sm !leading-relaxed text-zinc-600 ">
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default LinkCard 
