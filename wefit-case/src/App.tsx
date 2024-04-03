import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet } from 'react-helmet'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CartContextProvider } from './contexts/cart-context'
import { client } from './lib/react-query'
import { router } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/theme'

export function App() {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <Helmet titleTemplate="%s | WeMovies" />
          <GlobalStyle />
          <RouterProvider router={router} />
        </CartContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
