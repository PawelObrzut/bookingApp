import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class LoginResponse {
  @Field({ description: 'JSON Web Token' })
  access_token: string;

  @Field(() => User)
  user: User;
}
