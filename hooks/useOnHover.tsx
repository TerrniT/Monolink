import React, { useState } from 'react'

const useOnHover = () => {

  const [isShown, setIsShown] = useState<boolean>(false);

  const handleMouseEnter = (e: any) => {
    setIsShown(true);
  }
  const handleMouseOut = (e: any) => {
    setIsShown(false);
  }

  return {
    isShown, handleMouseOut, handleMouseEnter
  }
}

export default useOnHover
