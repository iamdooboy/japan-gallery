import React from 'react'
import StackItem from './stackItem'

const stack = ({ images }) => {
  return (
    <div className="stack">
      <div className="stack__item stack__item--empty"></div>
      {images.map(img => (
        <StackItem key={img.id} url={img.url} />
      ))}

      <div className="stack__item stack__item--empty"></div>
    </div>
  )
}

export default stack
