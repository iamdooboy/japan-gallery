import React, { useContext } from 'react'
import { ImagesContext } from '../components/contexts/ImageContext'

export const useImageContext = () => {
  const images = useContext(ImagesContext)

  return images
}
