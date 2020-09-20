import { AppProps } from 'next/app';
import React from 'react';
import 'highlight.js/styles/dracula.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: inter ui, -apple-system, BlinkMacSystemFont, roboto, segoe ui,
      Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #17072e;
    color: #fff;
  }

  body a {
    color: #e8c172;
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

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
