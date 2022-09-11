import React from 'react'
import { motion } from 'framer-motion'
import { useStackItemContext } from '../../hooks/useStackItemContext'

const Title = () => {
  const { stackItemSelected } = useStackItemContext()

  return (
    <div className="title">
      <motion.h2
        className="title__main oh"
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: stackItemSelected.selected ? 0 : 1,
          y: stackItemSelected.selected ? '-101%' : 0,
          transition: { duration: 0.9 }
        }}
      >
        <span className="oh__inner">Photography</span>
      </motion.h2>
      <motion.span
        className="title__sub oh"
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: stackItemSelected.selected ? 0 : 1,
          y: stackItemSelected.selected ? '-101%' : 0,
          transition: { duration: 0.9 }
        }}
      >
        <span className="oh__inner">2019 &mdash; 2021</span>
      </motion.span>
    </div>
  )
}

export default Title
