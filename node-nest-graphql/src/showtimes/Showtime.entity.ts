import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity('showtimes')
@ObjectType()
export class Showtime {
  @ObjectIdColumn()
  @Field(() => ID)
  _id: ObjectId;

  @Field(() => Int)
  @Column()
  movieId: number;

  @Field()
  @Column()
  theater: string;

  @Field()
  @Column()
  dateTime: string;

  @Field()
  @Column()
  duration: string;

  @Field(() => Int)
  @Column()
  availableSeats: number;

  @Field(() => Int)
  @Column()
  totalSeats: number;
}
