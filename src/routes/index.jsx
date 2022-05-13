import styles from './Routes.module.scss'
import { Routes, Route } from 'react-router-dom'

import GNB from 'routes/_shared/GNB'
import MovieSearch from './MovieSearch'
import MovieBookmark from './MovieBookmark'

const App = () => {

  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<MovieSearch />} />
          <Route path='bookmark' element={<MovieBookmark />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
      <GNB />
    </div>
  )
}

export default App
