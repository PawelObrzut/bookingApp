import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MoviesService } from './Movies.service';
import { Movie } from './Movie.entity';
import { NewMovieInput } from './NewMovie.input';

@Resolver('Movie')
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query(() => [Movie])
  async getAllMovies(): Promise<Movie[]> {
    try {
      return await this.moviesService.getAllMovies();
    } catch (err) {
      throw new Error('Unable to fetch movies.');
    }
  }

  @Query(() => [Movie])
  async getMoviesGtReleaseDate(@Args('date') date: string): Promise<Movie[]> {
    try {
      return await this.moviesService.getMoviesGtReleaseDate(date);
    } catch (err) {
      throw new Error('Unable to fetch movies.');
    }
  }

  @Query(() => [Movie])
  async getRepertoire(): Promise<Movie[]> {
    try {
      return await this.moviesService.getRepertoire();
    } catch (err) {
      throw new Error('Unable to fetch movies.');
    }
  }

  @Mutation(() => Movie)
  async addMovie(
    @Args('newMovieData') newMovieData: NewMovieInput,
  ): Promise<Movie> {
    return await this.moviesService.addMovie(newMovieData).catch((err) => {
      throw err;
    });
  }
}
