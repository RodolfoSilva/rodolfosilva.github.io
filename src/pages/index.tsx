import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { Post } from '../types';

type Props = {
  allPosts: Post[];
};

export default function Home({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      /> */}
      {allPosts.map((post) => {
        const title = post.title || post.slug;
        return (
          <div key={post.slug}>
            <h3>
              <Link href={post.slug}>{title}</Link>
            </h3>
            <small>{post.date?.toString()}</small>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </div>
        );
      })}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
