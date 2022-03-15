import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/Header'
import DestaqueBanner from '../components/homepage/destaquesBanner/Destaque'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jotinha Store</title>
      </Head>
      <Header />
      <main>
        <DestaqueBanner />
      </main>
    </div>
  )
}

export default Home
