/*
 TODO: Save users in seperate document in DB hashing passwords with bcrypt
 */

import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'John',
      password: 'notAstrongPassword123',
    },
    {
      userId: 2,
      username: 'Maria',
      password: 'easyPassword?0',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
