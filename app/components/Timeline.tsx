import React, { ReactNode } from 'react';
import styles from './styles.module.css';

interface Props {
  children?: ReactNode;
}

export default function Timeline(props: Props) {
  const { children } = props;
  return <ul className={styles.timeline}>{children}</ul>;
}
