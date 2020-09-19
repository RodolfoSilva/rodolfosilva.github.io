import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import Header from './Header';
import styles from './styles.module.css';

interface LayoutProps {
  children?: ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  const router = useRouter();
  const rootPath = `/`;

  const isMain = router.pathname === rootPath;

  return (
    <>
      <Header isMain={isMain} />
      <section className={styles.container}>
        <main>{children}</main>
      </section>
      <footer className={styles.footer}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.nextjs.org">Nextjs</a>
      </footer>
    </>
  );
}
