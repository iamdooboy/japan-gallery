import { createContext } from 'react'
import Frame from '../components/frame/frame'
import Content from '../components/content/content'
import Slides from '../components/slides/slides'
import Stack from '../components/stack/stackWrap'
import Title from '../components/title/title'
import { StackItemProvider } from '../components/contexts/StackItemContext'
import { ImageProvider } from '../components/contexts/ImageContext'

export const ImagesContext = createContext([])

const Page = () => {
  return (
    <>
      <StackItemProvider>
        <ImageProvider>
          <Frame />
          <Content />
          <Slides />
          <Stack />
          <Title />
        </ImageProvider>
      </StackItemProvider>
    </>
  )
}

export default Page
