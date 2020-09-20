import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';

const MainContainer = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
`;

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />

      <MainContainer role="main">{children}</MainContainer>

      <footer role="contentinfo">
        {`© ${currentYear}, Built with `}
        <a href="https://www.nextjs.org" aria-label="Feito utilizando Nextjs">
          Nextjs
        </a>
      </footer>
    </>
  );
}
