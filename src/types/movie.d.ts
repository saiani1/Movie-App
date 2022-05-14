export interface IMovie {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

export interface IMovieRes {
  data(data: any): void | PromiseLike<void>
  Response: string,
  Search: IMovie[],
  totalResult: string
}