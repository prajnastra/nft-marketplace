import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { MeshProvider } from '@meshsdk/react'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <MeshProvider>
        <Component {...pageProps} />
      </MeshProvider>
    </ChakraProvider>
  )
}

export default App
