import { axios } from 'hooks/worker'
import { IMovie } from 'types/movie.d'

const MOVIE_BASE_URL = 'http://www.omdbapi.com'

interface Params {
  s: string,
  page: number
}

export const getMovieListApi = (params: Params) =>
  axios.get<IMovie>(`${MOVIE_BASE_URL}`, {
    params: {
      apikey: process.env.REACT_APP_MOVIE_API_KEY,
      ...params
    }
  })