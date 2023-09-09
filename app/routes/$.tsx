import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import { Link, useLoaderData } from '@remix-run/react';
import { getPost } from '~/utils/post';
import { LinksFunction, LoaderFunction, json } from '@remix-run/node';
import styles from 'highlight.js/styles/github-dark-dimmed.css';
import Discussion from '~/components/Discussion';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params['*'];
  if (!slug) throw new Response('Not found', { status: 404 });

  const post = await getPost(slug);
  if (post) {
    return json(post);
  } else {
    throw new Response('Not found', { status: 404 });
  }
};

export default function Post() {
  const { code, frontmatter } = useLoaderData<typeof loader>();
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <div className="prose lg:prose-base max-w-none my-8 prose-a:text-purple-600">
        <h1>{frontmatter.title}</h1>
        <Component />
      </div>
      <Discussion title={frontmatter.title} path={frontmatter.slug} />
    </>
  );
}
