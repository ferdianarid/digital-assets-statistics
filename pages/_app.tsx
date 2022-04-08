import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Hydrate } from 'react-query/hydration'

const queryClients = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClients}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider resetCSS={true} theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  )
}

export default MyApp
