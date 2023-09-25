import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { UpcomingMovie } from './upcomingMovie.entity';
import { NewUpcomingMovieInput } from './newUpcomingMovie.input';

@Injectable()
export class UpcomingMoviesService {
  constructor(
    @InjectRepository(UpcomingMovie)
    private upcomingMovieRepository: MongoRepository<UpcomingMovie>,
  ) {}

  async findAll(): Promise<UpcomingMovie[]> {
    return await this.upcomingMovieRepository.find();
  }

  async addUpcomingMovie(
    newUpcomingMovieData: NewUpcomingMovieInput,
  ): Promise<UpcomingMovie> {
    const newMovie = this.upcomingMovieRepository.create(newUpcomingMovieData);
    await this.upcomingMovieRepository.save(newMovie).catch(() => {
      new InternalServerErrorException();
    });
    return newMovie;
  }
}
