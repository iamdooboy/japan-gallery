import { useState, useEffect, createContext } from 'react'
import Frame from '../components/frame/frame'
import Content from '../components/content/content'
import Slides from '../components/slides/slides'
import Stack from '../components/stack/stackWrap'
import Title from '../components/title/title'
import { images } from '../components/images/images'

export const StackItemContext = createContext({})
export const ImagesContext = createContext([])

const Page = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false)
  const [itemSelected, setItemSelected] = useState('')
  const [stackItemClicked, setStackItemClicked] = useState(false)

  useEffect(() => {
    document.querySelector('body').classList.add('demo-1')
    document.querySelector('body').classList.add('loading')

    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image.url
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url)
          }, 2000)

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(images.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log('Failed to load images', err))

    document.body.classList.remove('loading')
  }, [])

  return (
    <>
      <StackItemContext.Provider
        value={{
          stackItemClicked,
          setStackItemClicked,
          itemSelected,
          setItemSelected
        }}
      >
        <ImagesContext.Provider value={images}>
          <Frame />
          <Content stackItemClicked={stackItemClicked} />
          <Slides />
          <Stack images={images} />
          <Title />
        </ImagesContext.Provider>
      </StackItemContext.Provider>
    </>
  )
}

export default Page
