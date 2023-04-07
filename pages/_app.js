import Head from 'next/head'
import { RouteWrapper } from '../context/RouteContext'
import { UserWrapper } from '../context/UserContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserWrapper>
      <RouteWrapper>
        <Head>
          <title>Candradimuka AJCC Community</title>
        </Head>
        <Component {...pageProps} />
      </RouteWrapper>
    </UserWrapper>
  )
}

export default MyApp
