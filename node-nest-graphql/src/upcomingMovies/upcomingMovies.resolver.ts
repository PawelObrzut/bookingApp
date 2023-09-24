import { Resolver, Query } from '@nestjs/graphql';
import { UpcomingMoviesService } from './upcomingMovies.service';
import { UpcomingMovie } from './upcomingMovie.entity';

@Resolver('Movie')
export class MoviesResolver {
  constructor(private readonly upcomingMoviesService: UpcomingMoviesService) {}

  @Query(() => [UpcomingMovie])
  async movies(): Promise<UpcomingMovie[]> {
    try {
      const movies = await this.upcomingMoviesService.findAll();
      return movies;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw new Error('Unable to fetch movies.');
    }
  }
}
