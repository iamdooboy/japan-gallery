import React from 'react'
import { useContext } from 'react'
import { StackItemContext } from '../../pages'

const stackItem = ({ img }) => {
  const { itemSelected, setStackItemClicked, setItemSelected } =
    useContext(StackItemContext)

  const currentItem = itemSelected.id === img.id ? ' stack__item--current' : ''

  const onClickHandler = () => {
    document.querySelector('body').classList.add('oh')
    setStackItemClicked(true)
    setItemSelected(img)
  }
  return (
    <div
      onClick={onClickHandler}
      className={`stack__item${currentItem}`}
      style={{
        backgroundImage: `url(${img.url})`
      }}
    ></div>
  )
}

export default stackItem
