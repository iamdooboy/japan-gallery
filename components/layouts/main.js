import Head from 'next/head'
import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Divider
} from '@chakra-ui/react'
import NavBar from '../navbar'

const main = ({ children, router }) => {
  return (
    <Box as="main" minHeight="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Duy Le - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.sm" pt={7} pb={4} position="relative">
        {children}
      </Container>
    </Box>
  )
}

export default main
