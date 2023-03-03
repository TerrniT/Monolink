import React from 'react'
import Image from 'next/image'
import { LinkDef } from '@/types'
import Link from 'next/link'
// @ts-ignore
import faviconFetch from 'favicon-fetch'

const Card = ({ id, title, description, url }: LinkDef) => {
  return (
    <div
      key={id}
      className="shadow-1xl relative w-[21rem] rounded-2xl bg-black/30 ring-1 ring-white/10 "
    >
      <div className="relative z-10 flex h-full flex-col justify-between divide-y divide-white/10 ">
        <div className="flex items-center justify-between px-6">
          <div className="w-full">
            <div className="flex items-center justify-between pt-4">
              <div className="text-lg font-bold">{title}</div>
              <div className="relative flex h-8 w-8 flex-shrink-0 ">
                <a
                  href={url}
                  rel="noreferrer"
                  target="_blank"
                  className="block self-center"
                >
                  <Image
                    src={faviconFetch({ uri: url })}
                    width={26}
                    height={26}
                    className="object-contain "
                    alt={title}
                    aria-hidden
                  />
                </a>
              </div>
            </div>
            <div className="flex-grow pr-4 pt-1 pb-4 text-sm !leading-relaxed text-gray-500 ">
              {description}
            </div>
          </div>
        </div>
        <div className="flex w-full divide-x divide-white/10 ">
          <Link
            href={url}
            className="inline-flex w-1/2 items-center space-x-2 rounded-l-2xl rounded-tl-none  transition-colors hover:bg-white/60 dark:hover:bg-gray-600/20"
          >
            <span className="mx-auto px-8 py-4 sm:hidden">Docs</span>
            <span className="hidden px-6 py-4 sm:inline ">Documentation</span>
          </Link>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-1/2 items-center space-x-2  rounded-r-2xl rounded-tr-none  transition-colors hover:bg-white/60 dark:hover:bg-gray-600/20"
          >
            <span className="mx-auto px-6 py-4">Github</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
