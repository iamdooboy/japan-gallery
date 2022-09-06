import React from 'react'

const FrameContent = ({ photographer, photographerUrl, photoUrl }) => {
  return (
    <>
      <div className="frame__title-main">{photographer}</div>
      <a
        aria-label="Back to the article"
        className="frame__title-back"
        href={photographerUrl}
      >
        <svg width="18px" height="18px" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
          />
        </svg>
      </a>
      <br />

      {photoUrl ? (
        <a
          className="frame__title-prev"
          href={photoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Image Source
        </a>
      ) : (
        <a
          className="frame__title-prev"
          href="https://github.com/codrops/ContentLayoutTransition/"
          target="_blank"
          rel="noreferrer"
        >
          Original Source Code
        </a>
      )}
    </>
  )
}

export default FrameContent
