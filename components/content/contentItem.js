import React, { useContext } from 'react'
import { StackItemContext } from '../../pages'
import { motion, AnimatePresence } from 'framer-motion'

const contentItem = ({ id, title1, title2, whenAndWhere, description }) => {
  const { itemSelected, stackItemClicked } = useContext(StackItemContext)
  const currentItem = itemSelected.id === id ? ' content__item--current' : ''

  const animateProps = {
    opacity: stackItemClicked ? 1 : 0,
    y: stackItemClicked ? 0 : '101%',
    transition: { duration: 0.8 }
  }

  const variants = {
    visible: {
      opacity: stackItemClicked ? 1 : 0,
      y: stackItemClicked ? 0 : '101%',
      transition: {
        duration: 1
      }
    },
    hidden: {
      opacity: 0,
      y: '101%',
      transition: {
        duration: 1
      }
    }
  }

  return (
    <>
      <motion.div className={`content__item${currentItem}`}>
        <h2 className="content__item-title">
          <span className="oh">
            <motion.span
              className="oh__inner"
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              {title1}
            </motion.span>
          </span>
          <span className="oh">
            <motion.span
              className="oh__inner"
              initial={{ y: '101%' }}
              animate={animateProps}
            >
              {title2}
            </motion.span>
          </span>
        </h2>
        <div className="content__item-description">
          <motion.p
            className="oh"
            initial={{ y: '101%' }}
            animate={animateProps}
          >
            <strong className="oh__inner">{whenAndWhere}</strong>
          </motion.p>
          <motion.p
            className="oh"
            initial={{ y: '101%' }}
            animate={animateProps}
          >
            <span className="oh__inner">{description}</span>
          </motion.p>
        </div>
      </motion.div>
    </>
  )
}

export default contentItem
