import { atom } from 'hooks/state'
import { IMovie } from 'types/movie.d'


export const localstorageListMovieState = atom<IMovie[]>({
  key: 'localstorageListMovieState',
  default: localStorage.getItem('likeMovie') !== null ? JSON.parse(localStorage.getItem('likeMovie') || '') : [],
})

export const likeMovieNameState = atom<string>({
  key: 'likeMovieNameState',
  default: undefined,
})

export const enteredMovieNameState = atom<string>({
  key: 'enteredMovieNameState',
  default: undefined,
})