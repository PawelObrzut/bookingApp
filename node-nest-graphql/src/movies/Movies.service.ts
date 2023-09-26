import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Movie } from './Movie.entity';
import { NewMovieInput } from './newMovie.input';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: MongoRepository<Movie>,
  ) {}

  async getAllMovies(): Promise<Movie[]> {
    return await this.movieRepository.find();
  }

  async addMovie(newMovieData: NewMovieInput): Promise<Movie> {
    const newMovie = this.movieRepository.create(newMovieData);
    await this.movieRepository.save(newMovie).catch(() => {
      new InternalServerErrorException();
    });
    return newMovie;
  }
}