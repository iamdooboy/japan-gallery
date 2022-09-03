import React, { useState, useRef, useEffect } from 'react'
import { useContext } from 'react'
import { StackItemContext } from '../../pages'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowSize } from '../../hooks/useWindowSize'

const stackItem = ({ img }) => {
  const {
    itemSelected,
    setItemSelected,
    setStackItemClicked,
    stackItemClicked,
    setScaleY,
    setOffsetTop,
    setOffsetHeight,
    scaleY,
    winsize
  } = useContext(StackItemContext)

  const ref = useRef(null)

  useEffect(() => {
    if (stackItemClicked && itemSelected.id === img.id) {
      const itemCenter = ref.current.offsetTop + ref.current.offsetHeight / 2
      console.log(ref.current.offsetHeight)
      setScaleY(winsize.height / 2 - itemCenter + winsize.scrollY)
    }
  }, [stackItemClicked])

  const currentItem = itemSelected.id === img.id ? ' stack__item--current' : ''

  const onClickHandler = e => {
    document.querySelector('body').classList.add('oh')
    setStackItemClicked(true)
    setItemSelected(img)
  }
  return (
    <motion.div
      ref={ref}
      onClick={onClickHandler}
      className={`stack__item${currentItem}`}
      style={{
        backgroundImage: `url(${img.url})`
      }}
    ></motion.div>
  )
}

export default stackItem
