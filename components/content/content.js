import React from 'react'
import ContentItem from './contentItem'
import BackButton from './backButton'
import ScrollButtons from './scrollButtons'
import { useStackItemContext } from '../../hooks/useStackItemContext'
import { useImageContext } from '../../hooks/useImageContext'

const content = () => {
  const images = useImageContext()
  const { stackItemClicked } = useStackItemContext()
  const open = stackItemClicked ? ' content--open' : ''

  return (
    <div className={`content${open}`}>
      {images.map(img => (
        <ContentItem
          key={img.id}
          id={img.id}
          title1={img.title1}
          title2={img.title2}
          whenAndWhere={img.whenAndWhere}
          description={img.description}
        />
      ))}
      <BackButton />
      <ScrollButtons />
    </div>
  )
}

export default content
