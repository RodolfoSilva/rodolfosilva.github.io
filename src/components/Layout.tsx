import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import GitHubIcon from './GithubIcon';
import TwitterIcon from './TwitterIcon';

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
      <header role="banner">
        <Link href="/">
          <a rel="home">
            <h1>{title}</h1>
            <h2>Software engineer</h2>
          </a>
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/curriculo">
                <a aria-label="Currículo" title="Currículo">
                  Currículo
                </a>
              </Link>
            </li>
            <li>
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Github"
                title="GitHub"
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Twitter"
                title="Twitter"
              >
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </nav>
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
                aria-label="Twitter"
                title="Twitter"
              >
                Siga-me no Twitter
              </a>
            </p>
          </div>
        ) : null}
      </header>

      <main role="main">{children}</main>

      <footer role="contentinfo">
        {`© ${currentYear}, Built with `}
        <a href="https://www.nextjs.org" aria-label="Nextjs">
          Nextjs
        </a>
      </footer>
    </>
  );
}
