import React, { useState, createContext } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'

export const StackItemContext = createContext({})

export const StackItemProvider = ({ children }) => {
  const [scaleY, setScaleY] = useState(0)
  const [[page, direction], setPage] = useState([0, 0])
  const winsize = useWindowSize()

  const [stackItemSelected, setStackItemSelected] = useState({
    item: '',
    selected: false
  })

  return (
    <StackItemContext.Provider
      value={{
        stackItemSelected,
        setStackItemSelected,
        scaleY,
        setScaleY,
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
