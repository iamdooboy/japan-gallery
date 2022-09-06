import React, { useContext } from 'react'
import { StackItemContext } from '../components/contexts/StackItemContext'

export const useStackItemContext = () => {
  const {
    stackItemClicked,
    setStackItemClicked,
    itemSelected,
    setItemSelected,
    scaleY,
    setScaleY,
    offsetTop,
    setOffsetTop,
    offsetHeight,
    setOffsetHeight,
    winsize,
    direction,
    setPage,
    page
  } = useContext(StackItemContext)

  return {
    stackItemClicked,
    setStackItemClicked,
    itemSelected,
    setItemSelected,
    scaleY,
    setScaleY,
    offsetTop,
    setOffsetTop,
    offsetHeight,
    setOffsetHeight,
    winsize,
    direction,
    setPage,
    page
  }
}
