import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { UpcomingMovie } from './upcomingMovie.entity';

@Injectable()
export class UpcomingMoviesService {
  constructor(
    @InjectRepository(UpcomingMovie)
    private upcomingMovieRepository: MongoRepository<UpcomingMovie>,
  ) {}

  async findAll(): Promise<UpcomingMovie[]> {
    return await this.upcomingMovieRepository.find();
  }
}
