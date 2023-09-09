import React from 'react';
import calculateAgeAt from '../utils/calculate-age-at';

export default function MyAge() {
  const birthday = new Date(721056600000);
  const age = calculateAgeAt(birthday, new Date());

  return <span aria-label="Idade">{age}</span>;
}
