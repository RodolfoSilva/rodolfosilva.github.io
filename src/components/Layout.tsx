import React, { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />

      <main role="main">{children}</main>

      <footer role="contentinfo">
        {`© ${currentYear}, Built with `}
        <a href="https://www.nextjs.org" aria-label="Feito utilizando Nextjs">
          Nextjs
        </a>
      </footer>
    </>
  );
}
