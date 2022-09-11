import React from 'react'
import StackItem from './stackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useStackItemContext } from '../../hooks/useStackItemContext'
import { useImageContext } from '../../hooks/useImageContext'

const Stack = () => {
  const { scaleY } = useStackItemContext()
  const images = useImageContext()

  return (
    <AnimatePresence>
      <motion.div
        layout
        layoutId="animation"
        className="stack"
        animate={{ y: scaleY }}
        transition={{
          type: 'spring',
          bounce: 0,
          ease: [0.6, 0.01, -0.05, 0.9],
          duration: 1.4
        }}
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
