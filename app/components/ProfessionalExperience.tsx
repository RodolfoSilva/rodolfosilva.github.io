import React from 'react';
import PeriodFormat from './PeriodFormat';

interface ProfessionalExperienceProps {
  company: string;
  role: string;
  period: string[];
}

export default function ProfessionalExperience(
  props: ProfessionalExperienceProps
) {
  const { company, role, period } = props;
  return (
    <>
      {company}
      <ul>
        <li>
          <strong>Período:</strong>{' '}
          <PeriodFormat start={period[0]} end={period[1]} />
        </li>
        <li>
          <strong>Função:</strong> {role}
        </li>
      </ul>
    </>
  );
}
