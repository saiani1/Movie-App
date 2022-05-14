import { atom } from 'hooks/state'
import { IMovie } from 'types/movie.d'

export const bookmarkListMovieState = atom<IMovie[]>({
  key: 'bookmarkListMovieState',
  default: [],
})

export const bookmarkMovieNameState = atom<string>({
  key: 'bookmarkMovieNameState',
  default: undefined,
})

export const enteredMovieNameState = atom<string>({
  key: 'enteredMovieNameState',
  default: undefined,
})