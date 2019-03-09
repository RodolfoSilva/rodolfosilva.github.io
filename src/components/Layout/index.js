import React from 'react'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import '../../styles/global.css'
import Header from './Header'
import styles from './styles.module.css'

class Layout extends React.Component {
  render () {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    let isMain = location.pathname === rootPath

    return (
      <>
        <Header isMain={isMain} title={title} />
        <section
          className={styles.container}
        >
          <main>
            {children}
          </main>
        </section>
        <footer className={styles.footer}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )
  }
}

export default Layout
