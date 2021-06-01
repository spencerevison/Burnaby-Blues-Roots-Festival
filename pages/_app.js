import App from 'next/app'
import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NextNprogress from 'nextjs-progressbar'
import TagManager from 'react-gtm-module'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { ParallaxProvider } from 'react-scroll-parallax'
import GlobalStyles from '../styles/GlobalStyles'
import theme from '../styles/ThemeLight'
import Footer from '../components/Footer/Footer'
import global from '../site.config.json'
import Fonts from '../lib/fonts'
import Header from '../components/Header/Header'

export default class MyApp extends App {
  componentDidMount() {
    // Client-side redirect
    Router.events.on('routeChangeStart', (url) => {
      if (url === '/tickets') {
        Router.replace('/2020-refunds')
      }
    })

    // Load fonts
    Fonts()

    // Initialize GTM
    TagManager.initialize({ gtmId: 'GTM-T3MXLXK' })
  }

  render() {
    const {
      Component,
      pageProps,
      router,
    } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="description" content={global.description} />

          <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/img/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/static/img/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/static/img/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="/static/img/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />

          <title>{pageProps.title}</title>

          <meta property="og:title" content={global.title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={global.baseurl} />
          <meta property="og:image" content={global.ogimage} />
          <meta property="og:description" content={global.description} />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />

          <meta name="twitter:description" content={global.description} />
          <meta name="twitter:image" content={global.ogimage} />
          <meta name="twitter:title" content={global.title} />

          <meta name="google-site-verification" content="18xptkldbi6c-DSNo4qcpullK0RxLEmaxKess-qFunw" />
        </Head>
        <Reset />
        <GlobalStyles theme={theme} />
        <NextNprogress
          stopDelayMs={1000}
        />

        <Header />
        <ParallaxProvider>
          <Component {...pageProps} key={router.route} />
        </ParallaxProvider>
        <Footer />

        <script type="text/javascript" src="/static/js/modernizr-custom.js" />
        <script type="text/javascript" src="https://polyfill.io/v3/polyfill.min.js?features=es2015%2CHTMLPictureElement%2CIntersectionObserver%2CString.prototype.includes%2CString.prototype.repeat%2CObject.assign" />
      </ThemeProvider>
    )
  }
}
