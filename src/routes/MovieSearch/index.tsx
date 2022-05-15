import { useEffect, useState } from 'hooks'
import { getMovieListApi } from 'services/movie'
import { IMovieRes, IMovie } from 'types/movie.d'
import { useRecoil } from 'hooks/state'
import { likeMovieNameState, localstorageListMovieState, enteredMovieNameState } from 'states/movie'

import styles from './MovieSearch.module.scss'
import MovieItem from '../../components/UI/MovieItem'
import MovieSearchFixed from './MovieSearchFixed'

const MovieSearch = () => {
  const [enteredMovie] = useRecoil(enteredMovieNameState)
  const [likeMovie, setLikeMovie] = useRecoil(likeMovieNameState)
  const [localstorageListMovie, setLocalstorageListMovie] = useRecoil(localstorageListMovieState)
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
    if (likeMovie !== '') {
      let tmpLocalStorageMovie: object[]
      const bookmarkMovieObject: any = data?.Search.find((movie) => movie.Title === likeMovie)

      if (localstorageListMovie[0] !== null && bookmarkMovieObject !== undefined) {
        tmpLocalStorageMovie = [...localstorageListMovie, bookmarkMovieObject]
      } else tmpLocalStorageMovie = [bookmarkMovieObject]

      if (tmpLocalStorageMovie[0] !== undefined) {
        localStorage.setItem('likeMovie', JSON.stringify(tmpLocalStorageMovie))
        setLocalstorageListMovie(JSON.parse(localStorage.getItem('likeMovie') || ''))
        setLikeMovie('')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likeMovie])

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
