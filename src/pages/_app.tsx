import '@styles/globals.css'
import type { AppProps } from 'next/app'

import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

import TagManager from "react-gtm-module";

export default function App({ Component, pageProps }: AppProps) {

  const tagManagerArgs = {
    gtmId: "G-GKVQS2LH5B",
  };

  if (process.browser) {
    TagManager.initialize(tagManagerArgs);
  }

  useEffect(() => {
    hotjar.initialize(3355535, 1)
  }, [])

  return <Component {...pageProps} />
}
