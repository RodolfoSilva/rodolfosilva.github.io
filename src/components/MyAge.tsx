import React from 'react';

export default function MyAge() {
  return (
    <time dateTime="721056600000">
      {~~(Date.now() / 31557600000 - 22.847592972849647)}
    </time>
  );
}
