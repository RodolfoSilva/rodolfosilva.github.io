import React from 'react'
import styles from './styles.module.css'

export const Timeline = ({ children }) => (
  <ul className={styles.timeline}>
    {children}
  </ul>
)
