import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import PeriodFormat from '../PeriodFormat'

const ProfessionalExperience = ({ company, role, period }) => (
  <Fragment>
    {company}
    <ul>
      <li><strong>Período:</strong> <PeriodFormat start={period[0]} end={period[1]} /></li>
      <li><strong>Função:</strong> {role}</li>
    </ul>
  </Fragment>
)

ProfessionalExperience.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  period: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ProfessionalExperience
