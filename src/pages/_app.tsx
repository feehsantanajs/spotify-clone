
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'
function MyApp({ Component,  pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
    <Head>
      <title>Spotify 2.0</title>
    </Head>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </>
    
  )
}

export default MyApp
