import React from 'react'
import Image from 'next/image'
import { LinkDef } from '@/types'
// @ts-ignore
import faviconFetch from 'favicon-fetch'
import LinkDropmenu from './LinkDropmenu'
import useOnHover from '@/hooks/useOnHover'
import Indicator from '../atoms/indicator'

const LinkRow = (props: LinkDef) => {
  const { isShown, handleMouseEnter, handleMouseOut } = useOnHover()

  return (
    <div
      key={props.id}
      className="shadow-1xl relative h-fit min-h-4 rounded-lg bg-black/30 ring-1 ring-white/10 hover:ring-2 hover:ring-white duration-100 transition-all "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      {isShown && <Indicator url={props.url} />}
      <div className=" flex h-full flex-row items-center ">

        <LinkDropmenu {...props} />
        <div className=" flex h-8 w-8 items-center  justify-center  flex-shrink-0  ">
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

        <div className='flex flex-row  justify-center items-center h-8 ml-3    w-full'>
          <div className='flex flex-row gap-2 items-center w-1/3' >
            <div className="text-xs font-bold w-fit">{props.title}</div>
            {props.tags.tag_name && (
              <span className="px-1 h-3 font-bold w-fit  items-center justify-center flex rounded-full text-[10px]" style={{ backgroundColor: `${props.tags.color}` }}>
                {props.tags.tag_name}
              </span>
            )}
          </div>

          <div className="h-8 w-full text-xs text-zinc-600 flex items-center ">{props.description}</div>

        </div>

      </div>
      {/*   <div className="flex-grow px-4   text-sm !leading-relaxed text-zinc-600 "> */}
      {/*     <LinkDropmenu {...props} /> */}
      {/*   </div> */}
    </div>
  )
}

export default LinkRow 
