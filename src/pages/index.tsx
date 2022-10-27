import Head from 'next/head'

import Header from '@components/Header'
import Hero from '@components/Hero'
import NewsGrid from '@components/NewsGrid'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>News - Homepage</title>
        <meta name="description" content="This site was developed for a frontend mentor challenge" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Header />

      <Hero />
      <main>
        <NewsGrid />
      </main>

      <Footer />
    </>
  )
}
