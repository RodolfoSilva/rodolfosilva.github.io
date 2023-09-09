import { bundleMDX } from './mdx.server';

export async function parseMdx(source: string) {
  const [rehypeHighlight, remarkGfm] = await Promise.all([
    import('rehype-highlight').then((mod) => mod.default),
    import('remark-gfm').then((mod) => mod.default),
  ]);

  return await bundleMDX({
    source: source,
    mdxOptions(options, _frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeHighlight as any,
      ];

      return options;
    },
  });
}
