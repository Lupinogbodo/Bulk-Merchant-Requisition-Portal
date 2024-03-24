import { Controller, Post, Body, UnauthorizedException,Res, Req } from '@nestjs/common';
import { LoginService } from './login-api.service';
import { LoginDto } from './dto/create-login-api.dto';
import { Response, Request } from 'express';
import { Session } from '@nestjs/common';
import { User } from '../user/entities/user.entity'
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  @ApiTags('login')
  async login(@Body() loginDto: LoginDto, @Session() session: Record<string, any>): Promise<User> {
    const { username, password } = loginDto;
   const user= await this.loginService.findByUsernameAndPassword(username, password);
   if (!User) {
    throw new UnauthorizedException('Invalid username or password');
  }
  session.user = user;

  return user;
  }

  @Post('logout')
  @ApiTags('login')
  async logout(@Req() req: Request & { session: { user: User } }, @Res() res: Response) {
    const user: User = req.session.user;

    if (!user) {
      throw new UnauthorizedException('User not logged in');
    }

    req.session.destroy((err) => {
      if (err) {
        throw new Error('Error destroying session');
      }
      res.send({ message: 'Logged out successfully' });
    });
  }
}
