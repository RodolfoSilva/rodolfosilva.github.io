import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
          <img
            src={`https://github.com/${social.github}.png?size=50`}
            alt={author}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              height: 50,
              borderRadius: `50%`,
            }}
          />
            <p>
              <strong>{author}</strong> Engenheiro de software na agilize.com.br.
              {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                Siga-me no Twitter
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
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

export default Bio
