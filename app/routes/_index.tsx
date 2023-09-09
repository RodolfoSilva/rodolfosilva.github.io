import type { V2_MetaFunction } from '@remix-run/node';

import { Link, useLoaderData } from '@remix-run/react';
import format from 'date-fns/format';
import { getPosts } from '~/utils/post';
import type { Post } from '~/utils/post';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Rodolfo Silva' },
    { property: "og:title", content: 'Rodolfo Silva' },
    { name: 'description', content: 'Desenvolvedor apaixonado por novas tecnologias.' },
    { property: "og:description", content: 'Desenvolvedor apaixonado por novas tecnologias.' },
  ];
};

export default function Index() {
  const posts = useLoaderData<Post[]>();

  return (
    <div className="space-y-2 mt-6 -mx-4">
      {posts.map((post) => (
        <Link
          to={post.slug}
          key={post.slug}
          className="block group hover:bg-gray-50 p-2 px-4 rounded-md cursor-pointer"
        >
          <h2 className="text-xl text-bold group-hover:text-purple-600">
            {post.title}
          </h2>
          <time className="text-xs text-gray-400" dateTime={post.date}>
            Publicado em: {format(new Date(post.date), "dd/MM/yyyy 'às' hh:mm")}
          </time>
        </Link>
      ))}
    </div>
  );
}

export const loader = async () => {
  return getPosts();
};
