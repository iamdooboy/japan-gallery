import React, { useContext } from 'react'
import { StackItemContext } from '../components/contexts/StackItemContext'

export const useStackItemContext = () => {
  const {
    stackItemSelected,
    setStackItemSelected,
    scaleY,
    setScaleY,
    winsize,
    direction,
    setPage,
    page
  } = useContext(StackItemContext)

  return {
    stackItemSelected,
    setStackItemSelected,
    scaleY,
    setScaleY,
    winsize,
    direction,
    setPage,
    page
  }
}
