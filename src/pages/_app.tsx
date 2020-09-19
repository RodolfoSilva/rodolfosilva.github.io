import { AppProps } from 'next/app';
import React from 'react';
import '../styles/global.css';
import 'highlight.js/styles/dracula.css';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}
