import { Field, InputType, Int, Float } from '@nestjs/graphql';
import { Entity, Column } from 'typeorm';

@Entity('upcomingMovies') // * passing an object like that { name: 'upcomingMovies' } would also work.
@InputType()
export class NewUpcomingMovieInput {
  @Field()
  @Column()
  backdrop_path: string;

  @Field(() => [String])
  @Column('text', { array: true })
  genre_ids: string[];

  @Field(() => Int)
  @Column()
  id: number;

  @Field()
  @Column()
  original_language: string;

  @Field()
  @Column()
  original_title: string;

  @Field()
  @Column()
  overview: string;

  @Field(() => Float)
  @Column()
  popularity: number;

  @Field()
  @Column()
  poster_path: string;

  @Field()
  @Column()
  release_date: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  video: string;

  @Field(() => Int)
  @Column()
  vote_average: number;

  @Field(() => Int)
  @Column()
  vote_count: number;
}
