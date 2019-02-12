import React from 'react';

const months = [
  'janeiro', 'fevereiro', 'março',
  'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro',
  'outubro', 'novembro', 'dezembro',
]

const PeriodFormat = ({ start, end,  }) => {
  const startDate = new Date(start);
  const startMonthKey = startDate.getMonth();
  const startMonth = months[startMonthKey];
  const startYear = startDate.getFullYear();

  let endMonth;
  let endDate;
  let endYear;
  let endMonthKey;

  if (end) {
    endDate = new Date(end);
    endMonthKey = endDate.getMonth();
    endMonth = months[endMonthKey];
    endYear = endDate.getFullYear();
  }

  if (endMonth && startMonthKey === 0 && endMonthKey === 11 && startDate.getDate() === 1 && endDate.getDate() === 31) {
    return (<time dateTime={start}>{startYear}</time>);
  }

  if (endMonth) {
    return (
      <>
        <time dateTime={start}>de {startMonth} de {startYear}</time>
        {' à '}
        <time dateTime={end}>{endMonth} de {endYear}</time>
      </>
    );
  }

  return (<time dateTime={start}>desde {startMonth} de {startYear}</time>);
}

export default PeriodFormat;
