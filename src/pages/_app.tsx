import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { DefaultLayout } from '@/components/templates/DefaultLayout/'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
