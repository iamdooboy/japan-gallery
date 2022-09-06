import React, { createContext } from 'react'
import { images } from '../images/images'

export const ImagesContext = createContext([])

export const ImageProvider = ({ children }) => {
  return (
    <ImagesContext.Provider value={images}>{children}</ImagesContext.Provider>
  )
}
