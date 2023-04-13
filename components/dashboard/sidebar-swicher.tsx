import React from 'react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'

type Props = {
  active: boolean
  showLess: () => void
  showMore: () => void
}

const SidebarSwitcher = ({ active, showLess, showMore }: Props) => {
  return (
    <>
      {active ? (
        <div
          className="absolute -right-5 top-12 z-40 hidden h-8 w-8 cursor-pointer text-md text-white group-hover:block "
          onClick={showLess}
        >
          <BsFillArrowLeftSquareFill className=" text-white " />
        </div>
      ) : (
        <BsFillArrowRightSquareFill
          onClick={showMore}
          className="absolute -right-2 top-12 z-40 cursor-pointer text-md text-white group-hover:block hidden"
        />
      )}
    </>
  )
}

export default SidebarSwitcher
