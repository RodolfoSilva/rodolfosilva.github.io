import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import styles from './styles.module.css'
import GitHubIcon from '../../GithubIcon';
import TwitterIcon from '../../TwitterIcon';

function Header ({ isMain }) {
  return (
    <StaticQuery
      query={headerQuery}
      render={data => {
        const { author, social, title } = data.site.siteMetadata
        return (
          <div className={styles.container}>
            <div className={styles.navbar}>
              <Link
                className={styles.brand}
                to={`/`}
              >
                {title}
              </Link>

              <nav className={styles.nav}>
                <ul>
                  <li>
                    <Link to="/curriculo">Currículo</Link>
                  </li>
                  <li>
                    <a href={`https://github.com/${social.github}`} target="_blank" rel="noreferrer noopener" title="GitHub"><GitHubIcon /></a>
                  </li>
                  <li>
                    <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noreferrer noopener" title="Twitter"><TwitterIcon /></a>
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
                  <strong>{author}</strong> Engenheiro de software na agilize.com.br.
                  {` `}
                  <br />
                  <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noreferrer noopener" title="Twitter">
                    Siga-me no Twitter
                  </a>
                </p>
              </div>
            )}
          </div>
        )
      }}
    />
  )
}

const headerQuery = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        author
        social {
          twitter
          github
          disqus
        }
      }
    }
  }
`

export default Header
