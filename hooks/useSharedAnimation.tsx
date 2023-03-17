import React from 'react'
import { useAnimation } from "framer-motion"


const useSharedAnimation = () => {
  const controls = useAnimation()

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const initial = "hidden"

  return { controls, variants, initial }

}

export default useSharedAnimation
