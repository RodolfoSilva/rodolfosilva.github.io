import React from 'react';

interface ExtracurricularKnowledgeProps {
  title: string;
  description: string;
}

export default function ExtracurricularKnowledge(
  props: ExtracurricularKnowledgeProps
) {
  const { title, description } = props;
  return (
    <>
      <strong>{title}:</strong>
      <ul>
        <li>{description}</li>
      </ul>
    </>
  );
}
