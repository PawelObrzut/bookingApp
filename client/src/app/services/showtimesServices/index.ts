import client from '../../../apollo/apollo';
import { GET_SHOWTIMES } from './queries';
import { Showtimes_getShowtimesByMovieId } from '../showtimesServices/__generated__/Showtimes';

class ShowtimesService {
  public async fetchShowtimes(movieId: number): Promise<Showtimes_getShowtimesByMovieId[]> {
    const response = await client
      .query({ 
        query: GET_SHOWTIMES,
        variables: {
          movieId: movieId
        },
      })
      .catch((err) => {
        throw err;
      });

    if (response && response.data && response.data.getShowtimesByMovieId)
      return response.data.getShowtimesByMovieId as Showtimes_getShowtimesByMovieId[];

    return [];
  }
}

export default new ShowtimesService();