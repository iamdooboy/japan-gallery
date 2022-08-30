import React from 'react'

const scrollButtons = () => {
  return (
    <nav className="content__nav-wrap">
      <button className="content__nav content__nav--prev unbutton">
        <svg width="100" height="267" viewBox="0 0 100 267">
          <path d="M49.894 2.766v262.979" strokeLinecap="square" />
          <path
            fill="none"
            d="M99.75 76.596C73.902 76.596 52.62 43.07 49.895 0 47.168 43.07 25.886 76.596.036 76.596"
          />
        </svg>
      </button>
      <button className="content__nav content__nav--next unbutton">
        <svg width="100" height="267" viewBox="0 0 100 267">
          <path d="M49.894 2.766v262.979" strokeLinecap="square" />
          <path
            fill="none"
            d="M99.75 76.596C73.902 76.596 52.62 43.07 49.895 0 47.168 43.07 25.886 76.596.036 76.596"
          />
        </svg>
      </button>
    </nav>
  )
}

export default scrollButtons
