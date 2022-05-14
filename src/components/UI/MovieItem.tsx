import { IMovie } from 'types/movie.d'
import { useState } from 'hooks'
import { useRecoil } from 'hooks/state'
import { bookmarkMovieNameState, bookmarkListMovieState } from 'states/movie'
import { LikeIcon } from 'assets/svgs/index'

import styles from './MovieItem.module.scss'

interface Props {
  movie: IMovie
}

const MovieItem = ({ movie }: Props) => {
  const [, setSelectMovie] = useRecoil(bookmarkMovieNameState)
  const [bookmarkMovieList, setBookmarkMovieList] = useRecoil(bookmarkListMovieState)
  const [bookemarkedMovie, setBookemarkedMovie] = useState<boolean>(false)
  const [clickedMovie, setClickedMovie] = useState<boolean>(false)

  const movieClickHandler = (event: any) => {
    setClickedMovie(true)
    const tmp = event.target.innerText
    const arr = []
    arr.push(tmp.split('\n'))
    setSelectMovie(arr[0])
  }

  const addBookmarkHandler = () => {
    setBookemarkedMovie(true)
    setClickedMovie(false)
  }
  const cancleBtnClickHandler = () => {
    setClickedMovie(false)
  }

  return (
    <li className={styles.movieList}>
      <button type='button' className={styles.movieBtn} onClick={movieClickHandler}>
        <div className={styles.posterWrap}>
          <img src={movie.Poster} className={styles.moviePoster} alt={movie.Title} />
        </div>
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
      </button>
      {clickedMovie && (
        <div className={styles.modalWrap}>
          <div className={styles.backdrop} />
          <div className={styles.modal}>
            <button type='button' className={styles.allow} onClick={addBookmarkHandler}>
              즐겨찾기
            </button>
            <button type='button' className={styles.cancle} onClick={cancleBtnClickHandler}>
              취소
            </button>
          </div>
        </div>
      )}
      {bookemarkedMovie && (
        <div className={styles.likeWrap}>
          <LikeIcon className={styles.likeIcon} />
        </div>
      )}
    </li>
  )
}

export default MovieItem
