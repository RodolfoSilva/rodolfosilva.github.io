import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Wrapper = styled.header`
  background: linear-gradient(165deg, #36116a, #51199f);
  position: relative;
`;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  font-weight: 500;
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

export default function Header() {
  return (
    <Wrapper role="banner">
      <Container>
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
      </Container>
    </Wrapper>
  );
}
