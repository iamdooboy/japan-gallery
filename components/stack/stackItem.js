import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useStackItemContext } from '../../hooks/useStackItemContext'

const StackItem = ({ img }) => {
  const {
    stackItemSelected,
    setStackItemSelected,
    setScaleY,
    winsize,
    page,
    setPage
  } = useStackItemContext()

  const ref = useRef(null)

  useEffect(() => {
    if (stackItemSelected.selected && stackItemSelected.item.id === img.id) {
      const itemCenter = ref.current.offsetTop + ref.current.offsetHeight / 2
      setScaleY(winsize.height / 2 - itemCenter + winsize.scrollY)
    }
  }, [stackItemSelected.selected])

  const currentItem =
    stackItemSelected.item.id === img.id ? ' stack__item--current' : ''

  const onClickHandler = () => {
    document.querySelector('body').classList.add('oh')
    setStackItemSelected({ item: img, selected: true })
    setPage([page + 1, 1])
    //windowdocument.documentElement.scrollTop = document.body.scrollTop = 0
    window.scrollTo(0, 0)
  }
  return (
    <motion.div
      initial="false"
      ref={ref}
      onClick={onClickHandler}
      className={`stack__item${currentItem}`}
      style={{
        backgroundImage: `url(${img.url})`
      }}
    ></motion.div>
  )
}

export default StackItem
