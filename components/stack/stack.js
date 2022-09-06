import React from 'react'
import StackItem from './stackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useStackItemContext } from '../../hooks/useStackItemContext'
import { useImageContext } from '../../hooks/useImageContext'

const stack = () => {
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

  const variant2 = {
    enter: direction => {
      return {
        y: direction > 0 ? -101 : 101,
        opacity: 0
      }
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9
      }
    },
    exit: direction => {
      return {
        zIndex: 0,
        y: direction < 0 ? 101 : -101,
        opacity: 0
      }
    },
    info: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
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

export default stack
