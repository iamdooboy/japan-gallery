import React from 'react'
import Stack from '../stack/stack'
import { useStackItemContext } from '../../hooks/useStackItemContext'

const Slides = () => {
  const { stackItemSelected } = useStackItemContext()

  return <div className="slides">{stackItemSelected.selected && <Stack />}</div>
}

export default Slides
