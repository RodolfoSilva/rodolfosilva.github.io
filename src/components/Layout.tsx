import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Container = styled.header`
  background: linear-gradient(165deg, #36116a, #51199f);
  font-weight: 500;
  position: relative;
  color: #fff;
  padding: 16px;

  a {
    color: #fff;
    box-shadow: none;
    text-decoration: none;
  }

  @media print {
    display: none;
  }
`;

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  const router = useRouter();

  const isHomePage = router.pathname === '/';

  const currentYear = new Date().getFullYear();

  const author = 'Rodolfo Silva';
  const title = 'Rodolfo Silva';

  const twitter = 'ro_dolfosilva';
  const github = 'rodolfosilva';

  return (
    <>
      <Container role="banner">
        <Link href="/">
          <a rel="home">
            <h1>{title}</h1>
            <h2>Software engineer</h2>
          </a>
        </Link>

        <Menu />
        {isHomePage ? (
          <div>
            <img
              src={`https://github.com/${github}.png?size=200`}
              aria-label="Foto de Rodolfo Silva"
              alt={author}
            />
            <p>
              <strong>{author}</strong> Engenheiro de software na
              infleet.com.br.
              {` `}
              <a
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Siga-me no Twitter"
                title="Twitter"
              >
                Siga-me no Twitter
              </a>
            </p>
          </div>
        ) : null}
      </Container>

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
