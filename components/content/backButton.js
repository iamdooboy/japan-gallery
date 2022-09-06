import { motion } from 'framer-motion'
import { useStackItemContext } from '../../hooks/useStackItemContext'

const backButton = () => {
  const { setItemSelected, stackItemClicked, setStackItemClicked, setScaleY } =
    useStackItemContext()

  const onClickHandler = () => {
    document.querySelector('body').classList.remove('oh')
    setStackItemClicked(false)
    setItemSelected('')
    setScaleY(0)
  }

  const variants = {
    visible: {
      opacity: stackItemClicked ? 1 : 0,
      x: stackItemClicked ? 0 : -25,
      transition: {
        duration: 0.5
      }
    },
    hidden: {
      opacity: 0,
      x: -25,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.button
      className="content__back unbutton"
      onClick={onClickHandler}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <svg
        aria-hidden="true"
        width="16px"
        height="16px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.4939 20.5644C11.1821 20.8372 10.7083 20.8056 10.4356 20.4939L3.43557 12.4939C3.18814 12.2111 3.18814 11.7889 3.43557 11.5061L10.4356 3.50613C10.7083 3.1944 11.1822 3.16281 11.4939 3.43557C11.8056 3.70834 11.8372 4.18216 11.5644 4.49388L5.65283 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L5.65283 12.75L11.5644 19.5061C11.8372 19.8179 11.8056 20.2917 11.4939 20.5644Z" />
      </svg>
      <span className="oh__inner">Back</span>
    </motion.button>
  )
}

export default backButton
