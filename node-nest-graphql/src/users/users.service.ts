import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'John',
      password: 'notAstrongPassword123',
    },
    {
      id: 2,
      username: 'Maria',
      password: 'easyPassword?0',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
