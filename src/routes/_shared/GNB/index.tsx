import cx from 'classnames'
import { NavLink } from 'react-router-dom'

import styles from './GNB.module.scss'
import { SearchIcon, BookmarkIcon } from 'assets/svgs/index'

const GNB = () => {
  return (
    <nav className={styles.gnb}>
      <ul>
        <li className={styles.link}>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <SearchIcon className={styles.searchIcon} />
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to='bookmark' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <BookmarkIcon className={styles.bookmarkIcon}/>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default GNB
