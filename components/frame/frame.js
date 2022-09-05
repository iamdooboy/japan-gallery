import React, { useContext } from 'react'
import { ImagesContext } from '../../pages'
import { StackItemContext } from '../../pages'
import Logo from '../logo/logo'
import FrameContent from './frameContent'

const frame = () => {
  const images = useContext(ImagesContext)

  const {
    itemSelected,
    setItemSelected,
    setStackItemClicked,
    stackItemClicked,
    setScaleY,
    setOffsetTop,
    setOffsetHeight,
    scaleY,
    winsize,
    page,
    direction,
    setPage
  } = useContext(StackItemContext)

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
