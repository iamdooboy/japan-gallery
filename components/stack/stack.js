import React, { useContext } from 'react'
import StackItem from './stackItem'
import { ImagesContext } from '../../pages'
import { StackItemContext } from '../../pages'
import { motion, AnimatePresence } from 'framer-motion'

const stack = () => {
  const { stackItemClicked } = useContext(StackItemContext)
  const images = useContext(ImagesContext)

  const variants = {
    initial: {
      opacity: 1,
      y: 0
    },
    shift: {
      opacity: 1,
      y: stackItemClicked ? -264 : 0,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <motion.div
      className="stack"
      layout="size"
      variants={variants}
      initial="initial"
      animate="shift"
    >
      <div className="stack__item stack__item--empty"></div>
      {images.map(img => (
        <StackItem key={img.id} img={img} />
      ))}

      <div className="stack__item stack__item--empty"></div>
    </motion.div>
  )
}

export default stack
