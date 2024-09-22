import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import {   useLoaderData } from '@remix-run/react';
import { getPost } from '~/utils/post';
import { json } from '@remix-run/node';
import Discussion from '~/components/Discussion';
import type {  V2_MetaFunction , LinksFunction, LoaderFunction} from "@remix-run/node";

export const links: LinksFunction = () => [];

export const meta: V2_MetaFunction<typeof loader> = (  params) => {
  const { data: { frontmatter: post } } = params
  return [
    { title: post.title },
    { property: "og:title", content: post.title },
    { property: "keywords", content: post.tags.join(", ") },
    ...(post.description
      ? [
          { property: "description", content: post.description },
          { property: "og:description", content: post.description },
        ]
      : []),
   ];
};

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
