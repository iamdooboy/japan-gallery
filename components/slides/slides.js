import React from 'react'
import Stack from '../stack/stack'
import { useStackItemContext } from '../../hooks/useStackItemContext'

const Slides = () => {
  const { itemSelected } = useStackItemContext()
  return <div className="slides">{itemSelected && <Stack />}</div>
}

export default Slides
