import React, { useState, createContext } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'

export const StackItemContext = createContext({})

export const StackItemProvider = ({ children }) => {
  const [itemSelected, setItemSelected] = useState('')
  const [stackItemClicked, setStackItemClicked] = useState(false)
  const [scaleY, setScaleY] = useState()
  const [offsetTop, setOffsetTop] = useState(undefined)
  const [offsetHeight, setOffsetHeight] = useState(undefined)
  const winsize = useWindowSize()
  const [[page, direction], setPage] = useState([0, 0])

  return (
    <StackItemContext.Provider
      value={{
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
      }}
    >
      {children}
    </StackItemContext.Provider>
  )
}
