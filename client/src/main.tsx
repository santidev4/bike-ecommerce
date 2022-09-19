import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/styles/Global.styled'
import { QueryClientProvider, QueryClient,  } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const theme = {
  colors: {
    backgroundColor: '',
    lettersColor: '',
    primary: '#FCBC3D',
    secondary: '#F26426'
  },
  size: {
    navHeight: '70px',
    footerHeight: '200px'
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <ReactQueryDevtools />
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </ThemeProvider>
)
