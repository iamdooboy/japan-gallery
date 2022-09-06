import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useStackItemContext } from '../../hooks/useStackItemContext'

const stackItem = ({ img }) => {
  const {
    itemSelected,
    setItemSelected,
    setStackItemClicked,
    stackItemClicked,
    setScaleY,
    winsize,
    page,
    setPage
  } = useStackItemContext()

  const ref = useRef(null)

  useEffect(() => {
    if (stackItemClicked && itemSelected.id === img.id) {
      console.log(ref.current.offsetLeft)
      console.log(ref.current.offsetTop)
      const itemCenter = ref.current.offsetTop + ref.current.offsetHeight / 2
      setScaleY(winsize.height / 2 - itemCenter + winsize.scrollY)
    }
  }, [stackItemClicked])

  const currentItem = itemSelected.id === img.id ? ' stack__item--current' : ''

  const onClickHandler = () => {
    document.querySelector('body').classList.add('oh')
    setStackItemClicked(true)
    setItemSelected(img)
    setPage([page + 1, 1])
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
