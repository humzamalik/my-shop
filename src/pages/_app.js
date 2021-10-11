import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { Provider } from 'next-auth/client'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }} 
      >
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
