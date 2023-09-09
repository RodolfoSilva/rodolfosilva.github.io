import parseFrontMatter from 'front-matter';
import { readFile } from './fs.server';
import path from 'path';
import fs from 'fs/promises';
import { parseMdx } from './parse-mdx';

export type Post = {
  slug: string;
  title: string;
  content: string;
  date: Date;
};

export type PostMarkdownAttributes = {
  title: string;
};

const postsPath = path.join(`${__dirname}/../../src/_posts`);

const sanitizeSlug = (slug: string) => {
  return slug.replace(/^\/+|\/+$/g, '');
};

export async function getPost(slug: string) {
  const posts = await getPosts();
  const post = posts.find(
    (post) => sanitizeSlug(post.slug) === sanitizeSlug(slug)
  );

  if (!post) {
    return;
  }

  return await parseMdx(post.content);
}

export async function getPosts(): Promise<Post[]> {
  const postsPaths = await fs.readdir(postsPath, {
    withFileTypes: true,
  });

  return Promise.all(
    postsPaths
      .map(async (postPath: any) => {
        const filepath = path.join(postsPath, postPath.name);
        const file = (await readFile(filepath, 'utf-8')).toString();
        const { attributes } = parseFrontMatter<{
          slug: string;
          title: string;
          date: string;
        }>(file);

        return {
          slug: attributes.slug || postPath.name.replace(/\.mdx?/, ''),
          title: attributes.title,
          date: new Date(attributes.date),
          content: file,
        } as Post;
      })
      .reverse()
  );
}
