import React from 'react'
import Image from "next/image"


const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center " >
      <div className='flex gap-2 items-center mx-auto'>
        <Image src="/monolink-rev.svg" alt="loading" width={60} height={60} />
      </div>
    </div >
  )
}

export default Loading
