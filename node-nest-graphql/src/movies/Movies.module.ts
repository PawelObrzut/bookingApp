import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './Movie.entity';
import { MoviesService } from './Movies.service';
import { MoviesResolver } from './movies.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MoviesResolver, MoviesService],
})
export class MoviesModule {}
