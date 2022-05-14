import { useEffect, useState } from 'hooks'
import { getMovieListApi } from 'services/movie'
import { IMovieRes, IMovie } from 'types/movie.d'
import { useRecoil } from 'hooks/state'
import { bookmarkMovieNameState, bookmarkListMovieState, enteredMovieNameState } from 'states/movie'

import styles from './MovieSearch.module.scss'
import MovieItem from '../../components/UI/MovieItem'
import MovieSearchFixed from './MovieSearchFixed'

const MovieSearch = () => {
  const [enteredMovie, setEnteredMovie] = useRecoil(enteredMovieNameState)
  const [bookmarkMovieList, setBookmarkMovieList] = useRecoil(bookmarkListMovieState)
  const [selectMovie, setSelectMovie] = useRecoil(bookmarkMovieNameState)
  const [page, setPage] = useState<number>(1)
  const [data, setData] = useState<IMovieRes>()

  useEffect(() => {
    getMovieListApi({
      s: enteredMovie,
      page,
    }).then((res: any) => {
      setData(res.data)
    })
  }, [enteredMovie, page])
  
  useEffect(() => {
    setBookmarkMovieList((prev) => {
      const selectMovieObj = data?.Search.find((movie) => movie.Title === selectMovie[0])
      return {...prev, selectMovieObj}
    })
  }, [selectMovie])

  if (!data) return null

  return (
    <main className={styles.wrap}>
      <MovieSearchFixed />
      <ul className={styles.movieItemWrap}>
        {data.Search?.map((movie: IMovie) => {
          return <MovieItem key={movie.imdbID} movie={movie} />
        })}
        {(!enteredMovie || data.Response === 'False') && <li className={styles.errorText}>검색 결과가 없습니다.</li>}
      </ul>
    </main>
  )
}

export default MovieSearch
