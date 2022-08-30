import React from 'react'
import ContentItem from './contentItem'
import BackButton from './backButton'
import ScrollButtons from './scrollButtons'

const content = () => {
  return (
    <div className="content">
      <ContentItem />
      <BackButton />
      <ScrollButtons />
    </div>
  )
}

export default content
