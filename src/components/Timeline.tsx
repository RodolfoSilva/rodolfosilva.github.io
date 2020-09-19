import React from 'react';
import styles from './styles.module.css';

interface Props {}

export default function Timeline(props: React.PropsWithChildren<Props>) {
  const { children } = props;
  return <ul className={styles.timeline}>{children}</ul>;
}
