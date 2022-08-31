import React from 'react'
import ContentItem from './contentItem'
import BackButton from './backButton'
import ScrollButtons from './scrollButtons'
import { useContext } from 'react'
import { ImagesContext } from '../../pages'

const content = ({ stackItemClicked }) => {
  const images = useContext(ImagesContext)

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
