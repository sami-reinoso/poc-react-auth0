import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from "@auth0/auth0-react";


function MyApp({ Component, pageProps }: AppProps) {
  return <Auth0Provider
    domain=""
    clientId=""
    redirectUri="http://localhost:3000"
  >
    <Component {...pageProps} />
  </Auth0Provider>
}

export default MyApp
