import React from 'react'
import StackItem from './stackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useStackItemContext } from '../../hooks/useStackItemContext'
import { useImageContext } from '../../hooks/useImageContext'

const Stack = () => {
  const { stackItemClicked, scaleY } = useStackItemContext()
  const images = useImageContext()

  const variants = {
    initial: {
      opacity: 1,
      y: 0
    },
    shift: {
      y: stackItemClicked ? scaleY : 0,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="stack"
        variants={variants}
        initial="initial"
        animate="shift"
      >
        <div className="stack__item stack__item--empty" />
        {images.map(img => (
          <StackItem key={img.id} img={img} />
        ))}
        <div className="stack__item stack__item--empty" />
      </motion.div>
    </AnimatePresence>
  )
}

export default Stack
