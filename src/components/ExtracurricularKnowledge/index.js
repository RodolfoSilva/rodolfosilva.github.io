import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ExtracurricularKnowledge = ({ title, description }) => (
  <Fragment>
    <strong>{title}:</strong>
    <ul>
      <li>{description}</li>
    </ul>
  </Fragment>
)

ExtracurricularKnowledge.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ExtracurricularKnowledge
