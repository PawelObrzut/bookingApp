export interface IReviews {
  id: string
  author: string
  rating: number
  comment: string
}

export interface IMovie {
  id: number
  adult: boolean
  backdrop_path: string
  genres: string[]
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: string
  vote_average: number
  vote_count: number
  showTimes?: string[]
}