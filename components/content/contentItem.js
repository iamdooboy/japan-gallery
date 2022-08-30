import React from 'react'

const contentItem = ({ title1, title2, whenAndWhere, description }) => {
  return (
    <>
      <div className="content__item">
        <h2 className="content__item-title">
          <span className="oh">
            <span className="oh__inner">{title1}</span>
          </span>
          <span className="oh">
            <span className="oh__inner">{title2}</span>
          </span>
        </h2>
        <div className="content__item-description">
          <p className="oh">
            <strong className="oh__inner">{whenAndWhere}</strong>
          </p>
          <p className="oh">
            <span className="oh__inner">{description}</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default contentItem
