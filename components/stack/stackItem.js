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
    winsize,
    page,
    direction,
    setPage
  } = useContext(StackItemContext)

  const ref = useRef(null)

  useEffect(() => {
    if (stackItemClicked && itemSelected.id === img.id) {
      const itemCenter = ref.current.offsetTop + ref.current.offsetHeight / 2
      setScaleY(winsize.height / 2 - itemCenter + winsize.scrollY)
    }
  }, [stackItemClicked])

  const currentItem = itemSelected.id === img.id ? ' stack__item--current' : ''

  const onClickHandler = e => {
    document.querySelector('body').classList.add('oh')
    setPage([page + 1, 1])
    setStackItemClicked(true)
    setItemSelected(img)
    document.documentElement.scrollTop = document.body.scrollTop = 0
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
