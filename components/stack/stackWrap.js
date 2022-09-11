import React from 'react'
import Stack from './stack'
import { useStackItemContext } from '../../hooks/useStackItemContext'

const StackWrap = () => {
  const { stackItemSelected } = useStackItemContext()
  return (
    <div className="stack-wrap">{!stackItemSelected.selected && <Stack />}</div>
  )
}

export default StackWrap
