import React from "react";
import Image from "next/image";
import { LinkDef } from "@/types";
import Link from "next/link";
// @ts-ignore
import faviconFetch from "favicon-fetch";

const Card = ({ id, title, description, url }: LinkDef) => {
  return (
    <div
      key={id}
      className="relative bg-black/30 w-[21rem] rounded-2xl shadow-1xl ring-1 ring-white/10 "
    >
      <div className="relative z-10 flex flex-col justify-between h-full divide-y divide-white/10 ">
        <div className="flex justify-between items-center px-6">
          <div className="w-full">
            <div className="flex items-center justify-between pt-4">
              <div className="font-bold text-lg">{title}</div>
              <div className="relative flex-shrink-0 w-8 h-8 flex ">
                <a
                  href={url}
                  rel="noreferrer"
                  target="_blank"
                  className="block self-center"
                >
                  <Image
                    src={faviconFetch({ uri: url })}
                    //src="/vercel.png"
                    width={26}
                    height={26}
                    className="object-contain "
                    alt={title}
                    aria-hidden
                  />
                </a>
              </div>
            </div>
            <div className="flex-grow pr-4 pt-1 pb-4 text-sm text-gray-500 !leading-relaxed ">
              {description}
            </div>
          </div>
        </div>
        <div className="flex w-full divide-x divide-white/10 ">
          <Link
            href={url}
            className="inline-flex items-center space-x-2 w-1/2 dark:hover:bg-gray-600/20 hover:bg-white/60  transition-colors rounded-l-2xl rounded-tl-none"
          >
            <span className="sm:hidden px-8 py-4 mx-auto">Docs</span>
            <span className="hidden sm:inline px-6 py-4 ">Documentation</span>
          </Link>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 w-1/2  dark:hover:bg-gray-600/20 hover:bg-white/60  transition-colors rounded-r-2xl rounded-tr-none"
          >
            <span className="px-6 py-4 mx-auto">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
