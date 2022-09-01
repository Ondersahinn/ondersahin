
import React from 'react'
import { ThemeProvider } from 'next-themes'
import Layout from '@components/layout'
import 'antd/dist/antd.css';
import '../styles/globals.css'
import { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
  console.log('component', pageProps)
  return (
    <ThemeProvider attribute="class">
      {Component.displayName === 'PanelPage' ?
        <Component {...pageProps} /> :
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }

    </ThemeProvider>
  )
}

export default MyApp
