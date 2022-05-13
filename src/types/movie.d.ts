export interface IMovie {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

export interface IMovieRes {
  Response: string,
  Search: IMovie[],
  totalResult: string
}