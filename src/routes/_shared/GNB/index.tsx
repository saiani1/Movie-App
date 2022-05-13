import { NavLink } from 'react-router-dom'

import styles from './GNB.module.scss'
import { SearchIcon, BookmarkIcon } from 'assets/svgs/index'

const GNB = () => {
  return (
    <nav className={styles.gnb}>
      <ul>
        <li>
          <NavLink to='/' className={styles.link}>
            <SearchIcon className={styles.searchIcon} />
          </NavLink>
        </li>
        <li>
          <NavLink to='bookmark' className={styles.link}>
            <BookmarkIcon className={styles.bookmarkIcon}/>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default GNB
