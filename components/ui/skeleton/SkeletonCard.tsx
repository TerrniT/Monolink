import React from 'react'

const SkeletonCard = () => {
  return (
    <div
      className="shadow-1xl relative min-h-[10rem] rounded-2xl bg-zinc-800/30 ring-1 ring-white/10 "
    >
      <div className="relative z-10 flex h-full flex-col gap-1 justify-between divide-y divide-white/10 animate-pulse ">
        <div className="flex items-center justify-between px-6">
          <div className="w-full">
            <div className="flex items-center justify-between pt-4">
              <div className="text-lg font-bold h-4 bg-zinc-500 w-2/5 rounded-xl"></div>
              <div className="relative flex h-8 w-8 flex-shrink-0 rounded-xl  bg-zinc-600"></div>
            </div>
            <div className="block pr-4 mt-2  h-2 bg-zinc-600 rounded-sm "></div>
            <div className="block pr-4 mt-2 w-3/5 h-2 bg-zinc-600 rounded-sm"></div>
            <div className="block pr-4 mt-2 w-1/3 h-2 bg-zinc-600  rounded-sm"></div>
          </div>
        </div>
        <div className="flex w-full divide-x divide-white/10 mt-4">
          <div
            className="inline-flex w-full items-center space-x-2 rounded-l-2xl rounded-tl-none  transition-colors hover:bg-white/60 dark:hover:bg-gray-600/20"
          >
            <span className="hidden pl-5 h-3 w-3/4 my-4 mx-auto sm:inline bg-zinc-700"></span>
          </div>
          <div
            className="inline-flex w-full items-center space-x-2  rounded-r-2xl rounded-tr-none  transition-colors hover:bg-white/60 dark:hover:bg-gray-600/20"
          >
            <span className="mx-auto px-8 my-6 bg-zinc-700 h-3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard 
