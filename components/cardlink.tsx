import React from 'react'
import Image from 'next/image'
import { LinkDef } from '@/types'
// @ts-ignore
import faviconFetch from 'favicon-fetch'
import CardDropdownMenu from './CardDropdownMenu'

const Cardlink = (props: LinkDef) => {

  return (
    <div
      key={props.id}
      className="shadow-1xl relative min-h-[10rem] rounded-2xl bg-black/30 ring-1 ring-white/10 "
    >
      <div className="relative  flex h-full flex-col justify-between  ">
        <div className="flex items-center  justify-between px-6 py-4 relative ">
          <div className="w-full flex justify-between ">
            <div className="flex items-center w-full ">
              <div className="relative flex h-8 w-8 flex-shrink-0 ">
                <a
                  href={props.url}
                  rel="noreferrer"
                  target="_blank"
                  className="block self-center"
                >
                  <Image
                    src={faviconFetch({ uri: props.url })}
                    width={26}
                    height={26}
                    className="object-contain "
                    alt={props.title}
                    aria-hidden
                  />
                </a>
              </div>
              <div className="text-md font-bold w-full truncate">{props.title}</div>
              <CardDropdownMenu {...props} />
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

export default Cardlink
