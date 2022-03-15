import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/Header'
import CarroselComponent from '../components/homepage/destaquesBanner/carrousel/Carrosel'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jotinha Store</title>
      </Head>
      <Header />
      <main>
        <CarroselComponent />
      </main>
    </div>
  )
}

export default Home
