import React from 'react';
import { Link } from 'gatsby';
import styles from './style.module.css';

function Header({ title }) {
    return (
        <div className={styles.container}>
        
        <div className={styles.wrapper}>
        
        <Link
             className={styles.brand}
            to={`/`}
          >
            {title}
          </Link>

          <nav>
              <ul>
                  <li>Currículo</li>
                  <li>GitHub</li>
                  <li>Twitter</li>
              </ul>
          </nav>
        </div>
        </div>
    );
}


export default Header;