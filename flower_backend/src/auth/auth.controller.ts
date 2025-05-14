import { Body, Controller, Post, Res, Session } from '@nestjs/common';
import { LoginDto, LogoutDto, RegisterDto } from './usecases/dto/dto';
import { RegisterUsecase } from './usecases/register.usecase';
import { LoginUsecase } from './usecases/login.usecase';
import session from 'express-session';
import { LogoutUsecase } from './usecases/logout.usecase';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUsecase: RegisterUsecase,
    private readonly loginUsecase: LoginUsecase,
    private readonly logoutUsecase: LogoutUsecase
  ) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto ) {
    const result = await this.registerUsecase.addUser(
      registerDto.username,
      registerDto.password,
      registerDto.firstname,
      registerDto.lastname,
      registerDto.role
    )

    return result;
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Session() session: Record<string, string>) {
    const user = await this.loginUsecase.login(loginDto.username, loginDto.password)
    session.session_id = user.session

    return user;
  }

  @Post('logout')
  async logout(@Body() session_id: LogoutDto, @Session() session: Record<string, any>, @Res() res: Response) {
    await this.logoutUsecase.logout(session_id.session)

    session.destroy(err => {
      if (err) {
        return res.status(500).json({ message: 'Ошибка при выходе' });
      }
      res.clearCookie('connect.sid', { path: '/' });
      return res.json({ message: 'Успешный выход' });
    });
  }
}
