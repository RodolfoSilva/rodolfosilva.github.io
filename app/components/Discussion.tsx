import { DiscussionEmbed } from 'disqus-react';

interface DiscussionProps {
  path: string;
  title: string;
}

export default function Discussion(props: DiscussionProps) {
  const { path, title } = props;

  return (
    <DiscussionEmbed
      shortname="rodolfosilva"
      config={{
        url: `https://rodolfosilva.com/${path}`,
        title: title,
      }}
    />
  );
}
