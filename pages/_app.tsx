import 'src/styles/globals.css'
import 'src/styles/reset.css'
import { ThemeProvider } from 'styled-components'
import { theme } from 'src/styles/theme'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
