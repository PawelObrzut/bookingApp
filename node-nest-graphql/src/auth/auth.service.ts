import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginInput } from './dto/login-input';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.usersService.findOne(username);

    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(loginInput: LoginInput) {
    const user = this.usersService.findOne(loginInput.username);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return {
      access_token: 'JWT',
      user: result,
    };
  }
}
