import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfessionalExperience = ({ company, role, period }) => (
  <Fragment>
    {company}
    <ul>
      <li><strong>Período:</strong> {period}</li>
      <li><strong>Função:</strong> {role}</li>
    </ul>
  </Fragment>
)

ProfessionalExperience.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
}

export default ProfessionalExperience
