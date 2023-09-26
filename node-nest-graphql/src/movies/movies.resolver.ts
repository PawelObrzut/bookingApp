import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MoviesService } from './Movies.service';
import { Movie } from './Movie.entity';
import { NewMovieInput } from './newMovie.input';

@Resolver('Movie')
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query(() => [Movie])
  async getAllMovies(): Promise<Movie[]> {
    try {
      const movies = await this.moviesService.getAllMovies();
      return movies;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw new Error('Unable to fetch movies.');
    }
  }

  @Mutation(() => Movie)
  async addMovie(
    @Args('newMovieData') newMovieData: NewMovieInput,
  ): Promise<Movie> {
    return await this.moviesService.addMovie(newMovieData);
  }
}
