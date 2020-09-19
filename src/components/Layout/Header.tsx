import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import GitHubIcon from '../GithubIcon';
import TwitterIcon from '../TwitterIcon';

interface HeaderProps {
  isMain: boolean;
}

export default function Header(props: HeaderProps) {
  const { isMain } = props;
  const author = 'Rodolfo Silva';
  const title = 'Rodolfo Silva';
  const social = {
    twitter: 'ro_dolfosilva',
    github: 'rodolfosilva',
  };
  return (
    <header className={styles.container}>
      <div className={styles.navbar}>
        <Link href={`/`}>{title}</Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/curriculo">Currículo</Link>
            </li>
            <li>
              <a
                href={`https://github.com/${social.github}`}
                target="_blank"
                rel="noreferrer noopener"
                title="GitHub"
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/${social.twitter}`}
                target="_blank"
                rel="noreferrer noopener"
                title="Twitter"
              >
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isMain && (
        <div className={styles.hero}>
          <img
            src={`https://github.com/${social.github}.png?size=200`}
            alt={author}
            style={{
              marginBottom: 0,
              minWidth: 150,
              height: 150,
              borderRadius: `50%`,
              border: '6px solid #FFF',
            }}
          />
          <p>
            <br />
            <strong>{author}</strong> Engenheiro de software na infleet.com.br.
            {` `}
            <br />
            <a
              href={`https://twitter.com/${social.twitter}`}
              target="_blank"
              rel="noreferrer noopener"
              title="Twitter"
            >
              Siga-me no Twitter
            </a>
          </p>
        </div>
      )}
    </header>
  );
}
