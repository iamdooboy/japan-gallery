import React, { useContext } from 'react'
import StackItem from './stackItem'
import { ImagesContext } from '../../pages'
const stack = () => {
  const images = useContext(ImagesContext)

  return (
    <div className="stack">
      <div className="stack__item stack__item--empty"></div>
      {images.map(img => (
        <StackItem key={img.id} img={img} />
      ))}

      <div className="stack__item stack__item--empty"></div>
    </div>
  )
}

export default stack
