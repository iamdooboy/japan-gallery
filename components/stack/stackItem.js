import React from 'react'

const stackItem = ({ url }) => {
  return (
    <div
      className="stack__item"
      style={{
        backgroundImage: `url(${url})`
      }}
    ></div>
  )
}

export default stackItem
// `background-image:url(/${num}.jpg);`
