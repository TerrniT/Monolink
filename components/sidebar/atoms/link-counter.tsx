import { useCounterStore } from '@/store/store'
import React, { useState, useEffect } from 'react'


const LinkCounter = () => {
  const [number, setNumber] = useState<number | undefined>(0)

  const { counter } = useCounterStore((state) => ({
    counter: state.counter
  }))

  useEffect(() => {
    setNumber(counter)
  }, [counter])


  return (
    <>
      {number && (
        <div className='bg-orange-600 rounded text-white text-[11px] py-0.5 px-1 w-fit font-bold mr-2 '>{number}</div>
      )}
    </>
  )
}

export default LinkCounter 
