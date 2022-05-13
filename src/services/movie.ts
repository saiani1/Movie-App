import { axios } from 'hooks/worker'
import { IMovie } from 'types/movie.d'

const MOVIE_BASE_URL = 'http://www.omdbapi.com/?apikey=4e4b795f&s='

export const getMovieListApi = (moive: string) =>
  axios.get<IMovie>(`${MOVIE_BASE_URL}${moive}`)