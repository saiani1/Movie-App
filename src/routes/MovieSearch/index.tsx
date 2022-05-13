import styles from './MovieSearch.module.scss'

import { useEffect, useState } from 'hooks'
import { getMovieListApi } from 'services/movie'
import { IMovieRes } from 'types/movie.d'
import MovieItem from './MovieItem'
import MovieSearchFixed from './MovieSearchFixed'

const MovieSearch = () => {
  const [enteredMovie, setEnteredMovie] = useState<string>('')
  const [data, setData] = useState<IMovieRes>()

  useEffect(() => {
    getMovieListApi('movie').then((res: any) => setData(res.data))
  }, [enteredMovie])

  if (!data) return null

  const inputValueCallbackHandler = (movie: string) => {
    setEnteredMovie(movie)
  }

  return (
    <div className={styles.wrap}>
      <MovieSearchFixed callback={inputValueCallbackHandler}/>
      <ul className={styles.movieItemWrap}>
        {enteredMovie && data
          ? data.Search.map((movie: any) => {
              return <MovieItem key={movie.imdbID} movie={movie} />
            })
          : <li className={styles.errorText}>검색 결과가 없습니다.</li>}
      </ul>
    </div>
  )
}

export default MovieSearch
