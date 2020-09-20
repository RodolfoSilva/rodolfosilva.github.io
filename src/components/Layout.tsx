import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import MainHero from './MainHero';
import Menu from './Menu';

const Header = styled.header`
  background: linear-gradient(165deg, #36116a, #51199f);
  font-weight: 500;
  position: relative;
  color: #fff;
  padding: 16px;

  @media print {
    display: none;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-areas:
      'logo menu'
      'hero hero';
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
  }
`;

const MenuContainer = styled.div`
  grid-area: menu;
`;

const Logo = styled.div`
  grid-area: logo;

  a {
    color: #fff;
    text-decoration: none;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-weight: 700;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 0.885rem;
  }
`;

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header role="banner">
        <Logo>
          <Link href="/">
            <a rel="home">
              <h1>Rodolfo Silva</h1>
              <h2>Software engineer</h2>
            </a>
          </Link>
        </Logo>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Header>

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
