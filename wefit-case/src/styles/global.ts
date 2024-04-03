import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme['blue-700']};
    color: ${({ theme }) => theme.white};
    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['blue-200']};
  }

  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
