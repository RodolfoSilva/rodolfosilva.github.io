import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { getAllPosts, getPostByRealSlug } from '../lib/api';
import markdownToHtml from '../lib/markdown-to-html';
import { Post } from '../types';
import Layout from '../components/Layout';
import { DiscussionEmbed } from 'disqus-react';
import SEO from '../components/SEO';
import Link from 'next/link';
import Bio from '../components/Bio';

interface Props {
  post: Post
  morePosts: Post[]
  preview?: boolean
}


const BlogPost = (props: Props) => {
  const { post, morePosts, preview } = props;
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  console.log(preview, morePosts);

  if (router.isFallback) {
    return <h1>Loading…</h1>;
  }

  const disqusShortname = 'rodolfosilva';

  const disqusConfig = {
    url: `https://rodolfosilva.com${post.slug}`,
    title: post.title,
  };

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <Head>
        <meta property="og:image" content={post.ogImage} />
      </Head>

      <article itemType="https://schema.org/BlogPosting" itemScope>
        <header>
          <Link href={post.slug} data-item-prop="url">
            <h1 itemProp="headline">{post.title}</h1>
          </Link>

          <div
            style={{
              display: `block`,
            }}
          >
            <time itemProp="datePublished" dateTime={post.date}>
              {post.date}
            </time>
          </div>
        </header>
        <section itemProp="text">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </section>
        <footer>
          <hr />
          <Bio />
          <hr />
        </footer>
      </article>

      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </Layout>
  );
};

type Params = {
  params: {
    slug: string[];
  };
};

export default BlogPost;

export async function getStaticProps({ params }: Params) {
  const post = getPostByRealSlug(params.slug.join('/'), [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug.split('/'),
        },
      };
    }),
    fallback: false,
  };
}
