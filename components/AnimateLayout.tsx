import React from 'react'
import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
}

const AnimateLayout = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimateLayout 
