import styles from './MovieItem.module.scss'

import { IMovie } from 'types/movie.d'

interface Props {
  movie: IMovie
}

const MovieItem = ({ movie }: Props ) => {
   return (
    <li className={styles.movieList}>
      <img src={movie.Poster} className={styles.moviePoster} alt={movie.Title} />
      <div className={styles.movieDetailWrap}>
        <h3 className={styles.movieTitle}>{movie.Title}</h3>
        <div className={styles.movieText}>
          <dl>
            <dt>Year</dt>
            <dd className={styles.movieReleaseYear}>{movie.Year}</dd>
          </dl>
          <dl>
            <dt>Type</dt>
            <dd className={styles.movieType}>{movie.Type}</dd>
          </dl>
        </div>
      </div>
    </li>
  )
}

export default MovieItem