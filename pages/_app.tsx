
import React from 'react'
import { ThemeProvider } from 'next-themes'
import Layout from '@components/layout'
import 'antd/dist/antd.css';
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        {Component.displayName === 'PanelPage' ?
          <Component {...pageProps} /> :
          <Layout>
            <Component {...pageProps} />
          </Layout>
        }
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
