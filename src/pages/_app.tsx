import { AppProps } from 'next/app';
import React, {useEffect } from 'react';
import Router from 'next/router';
import 'highlight.js/styles/dracula.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { GTMPageView } from '../helpers/gtm.ts';
import 'typeface-montserrat';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: Montserrat, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #17072e;
    color: #fff;
  }

  body a {
    color: #e8c172;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    border: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  
  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
