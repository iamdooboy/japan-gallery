import React, { useContext, useEffect } from 'react'
import StackItem from './stackItem'
import { ImagesContext } from '../../pages'
import { StackItemContext } from '../../pages'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowSize } from '../../hooks/useWindowSize'

const stack = () => {
  const {
    stackItemClicked,
    animation,
    setStackItemClicked,
    setItemSelected,
    scaleY
  } = useContext(StackItemContext)
  const images = useContext(ImagesContext)

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
        <div className="stack__item stack__item--empty"></div>
        {images.map(img => (
          <StackItem key={img.id} img={img} />
        ))}

        <div className="stack__item stack__item--empty"></div>
      </motion.div>
    </AnimatePresence>
  )
}

export default stack
