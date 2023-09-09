import React from 'react';

export default function Bio() {
  const author = 'Rodolfo Silva';
  const social = {
    twitter: 'ro_dolfosilva',
    github: 'rodolfosilva',
    disqus: 'rodolfosilva',
  };
  return (
    <div
      style={{
        display: `flex`,
      }}
      itemProp="author"
      itemScope
      itemType="https://schema.org/Person"
    >
      <img
        src={`https://github.com/${social.github}.png?size=50`}
        alt={author}
        itemProp="image"
        style={{
          marginBottom: 0,
          minWidth: 50,
          height: 50,
          borderRadius: `50%`,
        }}
      />
      <p>
        <strong itemProp="name">{author}</strong>
        <br />
        Engenheiro de software na infleet.com.br.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`} itemProp="url">
          Siga-me no Twitter
        </a>
      </p>
    </div>
  );
}
