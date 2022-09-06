import React from 'react'
import Stack from './stack'
import { useStackItemContext } from '../../hooks/useStackItemContext'

const StackWrap = () => {
  const { stackItemClicked } = useStackItemContext()
  return <div className="stack-wrap">{!stackItemClicked && <Stack />}</div>
}

export default StackWrap
