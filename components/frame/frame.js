import React from 'react'
import Logo from '../logo/logo'
import FrameContent from './frameContent'
import { useStackItemContext } from '../../hooks/useStackItemContext'

const Frame = () => {
  const { stackItemSelected } = useStackItemContext()

  return (
    <div className="frame">
      <div className="frame__title">
        {stackItemSelected.selected ? (
          <FrameContent
            key={stackItemSelected.item.id}
            photographer={`Photo by ${stackItemSelected.item.photographer}`}
            photographerUrl={stackItemSelected.item.photographerUrl}
            photoUrl={stackItemSelected.item.photoUrl}
          />
        ) : (
          <FrameContent
            photographer="Stack to Content Layout Transition"
            photographerUrl="https://tympanus.net/codrops/2022/05/11/stack-to-content-layout-transition/"
          />
        )}
      </div>
      <Logo />
    </div>
  )
}

export default Frame
