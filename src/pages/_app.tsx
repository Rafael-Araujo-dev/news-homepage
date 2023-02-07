import '@styles/globals.css'
import type { AppProps } from 'next/app'

import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3355535, 1)
  }, [])

  return <Component {...pageProps} />
}
