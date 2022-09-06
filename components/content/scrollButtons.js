import { images } from '../images/images'
import { motion } from 'framer-motion'
import { useStackItemContext } from '../../hooks/useStackItemContext'

const ScrollButtons = () => {
  const {
    itemSelected,
    setItemSelected,
    stackItemClicked,
    scaleY,
    setScaleY,
    winsize,
    setPage,
    page
  } = useStackItemContext()

  let currentIndex = images.indexOf(itemSelected)

  const navigate = direction => {
    if (
      (direction === 'next' && currentIndex === images.length - 1) ||
      (direction === 'prev' && currentIndex === 0) //edge cases
    ) {
      return
    }

    const scrollOffset = winsize.height / 2 + winsize.height * 0.02
    if (direction === 'next') {
      setPage([page + 1, 1])
      setScaleY(scaleY - scrollOffset)
    } else {
      setPage([page + -1, -1])
      setScaleY(scaleY + scrollOffset)
    }

    currentIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
    const upcomingItem = images[currentIndex]
    setItemSelected(upcomingItem)
  }

  const nextVariant = {
    visible: {
      opacity: stackItemClicked && currentIndex < images.length - 1 ? 1 : 0,
      cursor: currentIndex < images.length - 1 ? 'pointer' : 'default',
      y: stackItemClicked ? 0 : 150,
      transition: {
        duration: 1
      }
    },
    hidden: {
      opacity: 0,
      y: 150,

      transition: {
        duration: 1
      }
    }
  }

  const prevVariant = {
    visible: {
      opacity: stackItemClicked && currentIndex > 0 ? 1 : 0,
      cursor: currentIndex > 0 ? 'pointer' : 'default',
      y: stackItemClicked ? 0 : -150,
      transition: {
        duration: 1
      }
    },
    hidden: {
      opacity: 0,
      y: -150,

      transition: {
        duration: 1
      }
    }
  }

  return (
    <nav className="content__nav-wrap">
      <motion.button
        className="content__nav content__nav--prev unbutton"
        onClick={() => navigate('prev')}
        variants={prevVariant}
        initial="hidden"
        animate="visible"
      >
        <svg width="100" height="267" viewBox="0 0 100 267">
          <path d="M49.894 2.766v262.979" strokeLinecap="square" />
          <path
            fill="none"
            d="M99.75 76.596C73.902 76.596 52.62 43.07 49.895 0 47.168 43.07 25.886 76.596.036 76.596"
          />
        </svg>
      </motion.button>
      <motion.button
        className="content__nav content__nav--next unbutton"
        onClick={() => navigate('next')}
        variants={nextVariant}
        initial="hidden"
        animate="visible"
      >
        <svg width="100" height="267" viewBox="0 0 100 267">
          <path d="M49.894 2.766v262.979" strokeLinecap="square" />
          <path
            fill="none"
            d="M99.75 76.596C73.902 76.596 52.62 43.07 49.895 0 47.168 43.07 25.886 76.596.036 76.596"
          />
        </svg>
      </motion.button>
    </nav>
  )
}

export default ScrollButtons
