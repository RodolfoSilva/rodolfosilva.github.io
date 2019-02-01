import React from 'react'
import"prismjs/plugins/line-numbers/prism-line-numbers.css";
import"../../styles/global.css";
import { rhythm } from '../../utils/typography'
import Header from './Header'
import styles from './styles.module.css'

class Layout extends React.Component {
  render () {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    let isMain = location.pathname === rootPath

    return (
      <div>
        <div>
          <Header isMain={isMain} title={title} />
          {header}
        </div>
        <div
          className={styles.container}
        >

          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
