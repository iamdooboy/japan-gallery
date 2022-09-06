import React from 'react'
import Stack from './stack'
import { useStackItemContext } from '../../hooks/useStackItemContext'

const stackWrap = () => {
  const { stackItemClicked } = useStackItemContext()
  return <div className="stack-wrap">{!stackItemClicked && <Stack />}</div>
}

export default stackWrap
