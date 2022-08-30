import React, { useState, useEffect } from 'react'
import Stack from './stack'

const stackWrap = ({ images }) => {
  return (
    <div className="stack-wrap">
      <Stack images={images} />
    </div>
  )
}

export default stackWrap
