import React from 'react'
import { Link, graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

function BlogPostTemplate ({ location, data: { markdownRemark: post }, pageContext: { previous, next, slug } }) {
  const disqusShortname = 'rodolfosilva'

  const disqusConfig = {
    url: `https://rodolfosilva.com${slug}`,
    title: post.frontmatter.title,
  }

  return (
    <Layout location={location}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />

      <article itemType="https://schema.org/BlogPosting" itemScope>
        <header>
          <Link to={slug} itemProp="url">
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
          </Link>

          <div
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            <time itemProp="datePublished" dateTime={post.frontmatter.date}>
              {post.frontmatter.dateFormatted}
            </time>
          </div>
        </header>
        <section itemProp="text">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
        <footer>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Bio />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </footer>
      </article>

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>

      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        dateFormatted: date(formatString: "MMMM DD, YYYY")
        date 
      }
    }
  }
`
