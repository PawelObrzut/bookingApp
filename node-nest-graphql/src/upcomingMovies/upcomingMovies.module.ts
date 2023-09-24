import { Module } from '@nestjs/common';
import { UpcomingMoviesService } from './upcomingMovies.service';
import { MoviesResolver } from './upcomingMovies.resolver';
import { UpcomingMovie } from './upcomingMovie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UpcomingMovie])],
  providers: [MoviesResolver, UpcomingMoviesService],
})
export class MoviesModule {}
