import React from 'react';
import Head from 'next/head';

interface Meta {
  name: string;
  content: string;
}

interface MetaProperty {
  property: string;
  content: string;
}

interface SEOProps {
  keywords?: string[];
  description?: string;
  lang?: string;
  title?: string;
  metas?: Meta[];
  metaProperties?: MetaProperty[];
}

function dedupMetas(metas: Meta[]): Meta[] {
  const map = new Map(metas.map(({ name, content }) => [name, content]));
  return Array.from(map.entries()).map(([name, content]) => ({
    name,
    content,
  }));
}

function dedupMetaProperties(metas: MetaProperty[]): MetaProperty[] {
  const map = new Map(
    metas.map(({ property, content }) => [property, content])
  );
  return Array.from(map.entries()).map(([property, content]) => ({
    property,
    content,
  }));
}

export default function SEO(props: SEOProps) {
  const {
    description = `Desenvolvedor apaixonado por novas tecnologias.`,
    metas: customMetas = [],
    lang = `pt-BR`,
    metaProperties: customMetaProperties = [],
    keywords = [],
    title,
  } = props;

  const siteName = 'Rodolfo Silva';

  const titleSeparator = '|';

  // @see https://tools.ietf.org/html/rfc7992#section-9.28
  const keywordsMeta =
    keywords.length > 0
      ? [
          {
            name: `keywords`,
            content: keywords.join(`,`),
          },
        ]
      : [];

  // @see https://ogp.me/
  const openGraphMetaProperties = [
    {
      property: `og:description`,
      content: title,
    },
    {
      property: `og:site_name`,
      content: siteName,
    },
    {
      property: `og:locale`,
      content: lang.replace('-', '_'),
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
  ];

  const metaProperties = dedupMetaProperties([
    ...openGraphMetaProperties,
    ...customMetaProperties,
  ]);

  // @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
  const twitterMetas = [
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:site`,
      content: `ro_dolfosilva`,
    },
    {
      name: `twitter:creator`,
      content: `ro_dolfosilva`,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ];

  const metas = dedupMetas([...twitterMetas, ...keywordsMeta, ...customMetas]);

  return (
    <Head>
      <title>{title ? `${title} ${titleSeparator} ${siteName}` : siteName}</title>

      {metas.map(({ name, content }) => (
        <meta key={name} name={name} content={content} />
      ))}

      {metaProperties.map(({ property, content }) => (
        <meta key={property} property={property} content={content} />
      ))}
    </Head>
  );
}
