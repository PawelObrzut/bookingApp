import { Field, InputType, Int, Float } from '@nestjs/graphql';
import { Entity, Column } from 'typeorm';

@Entity('movies') // * passing an object like that { name: 'movies' } would also work.
@InputType()
export class NewMovieInput {
  @Field()
  @Column()
  backdrop_path: string;

  @Field(() => [Int])
  @Column('int', { array: true })
  genre_ids: number[];

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
  video: boolean;

  @Field(() => Int)
  @Column()
  vote_average: number;

  @Field(() => Int)
  @Column()
  vote_count: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  inRepertoire: boolean;
}
