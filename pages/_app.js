import '../styles/styles.css'

const Website = ({ Component, pageProps, router }) => {
  return <Component {...pageProps} key={router.route} />
}

export default Website
