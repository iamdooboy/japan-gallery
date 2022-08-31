import React, { useContext } from 'react'
import { StackItemContext } from '../../pages'
import Stack from '../stack/stack'

const slides = () => {
  const { itemSelected } = useContext(StackItemContext)
  return <div className="slides">{itemSelected && <Stack />}</div>
}

export default slides
