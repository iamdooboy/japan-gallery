import React from 'react'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { StackItemContext, AnimatePresence } from '../../pages'

const title = () => {
  const { stackItemClicked } = useContext(StackItemContext)

  return (
    <div className="title">
      <motion.h2
        className="title__main oh"
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: stackItemClicked ? 0 : 1,
          y: stackItemClicked ? '-101%' : 0,
          transition: { duration: 0.9 }
        }}
      >
        <span className="oh__inner">Photography</span>
      </motion.h2>
      <motion.span
        className="title__sub oh"
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: stackItemClicked ? 0 : 1,
          y: stackItemClicked ? '-101%' : 0,
          transition: { duration: 0.9 }
        }}
      >
        <span className="oh__inner">1986 &mdash; 2022</span>
      </motion.span>
    </div>
  )
}

export default title
