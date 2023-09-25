import client from '../../../apollo/apollo';
import { LOAD_MOVIES } from "./queries";
import { getAllMovies_movies } from "./__generated__/getAllMovies";

class UpcommingMoviesService {
  async getAllMovies(): Promise<getAllMovies_movies[]> {
    const response = await client
      .query({ query: LOAD_MOVIES })
      .catch((err) => {
        throw err;
      });
    
    if (response && response.data && response.data.getAllMovies)
      return response.data.getAllMovies as getAllMovies_movies[];

    return [];
  }
}

export default new UpcommingMoviesService();