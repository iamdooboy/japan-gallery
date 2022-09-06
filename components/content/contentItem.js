import React from 'react'
import { useStackItemContext } from '../../hooks/useStackItemContext'
import { motion, AnimatePresence } from 'framer-motion'

const contentItem = ({ id, title1, title2, whenAndWhere, description }) => {
  const { itemSelected, direction, page } = useStackItemContext()

  const currentItem = itemSelected.id === id ? ' content__item--current' : ''

  const variants = {
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
    <AnimatePresence initial={false} custom={direction}>
      <motion.div className={`content__item${currentItem}`}>
        <h2 className="content__item-title">
          <span className="oh">
            <motion.span
              className="oh__inner"
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {title1}
            </motion.span>
          </span>
          <span className="oh">
            <motion.span
              className="oh__inner"
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {title2}
            </motion.span>
          </span>
        </h2>
        <div className="content__item-description">
          <motion.p
            className="oh"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="info"
            exit="exit"
          >
            <strong className="oh__inner">{whenAndWhere}</strong>
          </motion.p>
          <p className="oh">
            <motion.span
              className="oh__inner"
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {description}
            </motion.span>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default contentItem
