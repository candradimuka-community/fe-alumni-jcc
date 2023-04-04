import { RouteWrapper } from '../context/RouteContext'
import { UserWrapper } from '../context/UserContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserWrapper>
      <RouteWrapper>
        <Component {...pageProps} />
      </RouteWrapper>
    </UserWrapper>
  )
}

export default MyApp
