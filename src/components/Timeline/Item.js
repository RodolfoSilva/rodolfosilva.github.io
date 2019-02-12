import React from 'react'
import styles from './styles.module.css'
import PeriodFormat from '../PeriodFormat'

export const Item = ({ title, subTitle, startAt, endAt, children }) => (
  <li className={styles.timelineItem}>
    <h2 className={styles.timelineItemTitle}>{title}</h2>
    <div className={styles.timelineItemPeriod}>
      <PeriodFormat start={startAt} end={endAt}/>
    </div>
    <div className={styles.timelineItemSmall}>{subTitle}</div>
    {children && (
      <div className={styles.timelineItemDescription}>
        {children}
      </div>
    )}
  </li>
)
