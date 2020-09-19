import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
function SEO(props) {
  const {
    description: metaDescription = `Desenvolvedor apaixonado por novas tecnologias.`,
    lang,
    meta,
    keywords,
    title,
  } = props;

  const metas = [
    {
      property: ``,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: 'Rodolfo Silva',
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]
    .concat(
      keywords.length > 0
        ? {
            name: `keywords`,
            content: keywords.join(`, `),
          }
        : []
    )
    .concat(meta);

  return (
    <Head>
      <title>{title ? `${title} | ` : ''}Rodolfo Silva</title>
      {metas.map((props, i) => (
        <meta key={i} {...props} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `pt-BR`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
