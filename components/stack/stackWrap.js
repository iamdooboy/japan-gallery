import React, { useContext } from 'react'
import Stack from './stack'
import { StackItemContext } from '../../pages'

const stackWrap = () => {
  const { stackItemClicked } = useContext(StackItemContext)
  return <div className="stack-wrap">{!stackItemClicked && <Stack />}</div>
}

export default stackWrap
