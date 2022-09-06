import React from 'react'
import Logo from '../logo/logo'
import FrameContent from './frameContent'
import { useStackItemContext } from '../../hooks/useStackItemContext'

const frame = () => {
  const { itemSelected, stackItemClicked } = useStackItemContext()

  return (
    <div className="frame">
      <div className="frame__title">
        {stackItemClicked ? (
          <FrameContent
            key={itemSelected.id}
            photographer={`Photo by ${itemSelected.photographer}`}
            photographerUrl={itemSelected.photographerUrl}
            photoUrl={itemSelected.photoUrl}
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

export default frame
