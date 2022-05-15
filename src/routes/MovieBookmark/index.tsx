import styles from './MovieBookmark.module.scss'
import { IMovie } from 'types/movie.d'
import { useState } from 'hooks'

import { useRecoil } from 'hooks/state'
import { localstorageListMovieState } from 'states/movie'
import MovieItem from 'components/UI/MovieItem'

const MovieBookmark = () => {
  const [localstorageListMovie, ] = useRecoil(localstorageListMovieState)

  return (
    <main className={styles.wrap}>
      <h3 className={styles.title}>내 즐겨찾기</h3>
      <ul>
        {(localstorageListMovie.length !== 0 && localstorageListMovie.find((object) => object !== null)) ?
          localstorageListMovie.map((movie: IMovie) => {
            return <MovieItem key={movie.imdbID} movie={movie} />
          }) : <li className={styles.errorText}>즐겨찾기한 영화가 없습니다.</li>}
      </ul>
    </main>
  )
}

export default MovieBookmark
