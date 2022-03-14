import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jotinha Store</title>
      </Head>
      <main>
        <Header />
      </main>
    </div>
  )
}

export default Home
