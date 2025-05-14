import { Body, Controller, Post, Session } from '@nestjs/common';
import { LoginDto, RegisterDto } from './usecases/dto/dto';
import { RegisterUsecase } from './usecases/register.usecase';
import { LoginUsecase } from './usecases/login.usecase';
import session from 'express-session';
import { LogoutUsecase } from './usecases/logout.usecase';

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
  async logout(@Body() session_id: string, @Session() session: Record<string, any>) {
    const result = await this.logoutUsecase.logout(session_id)

    session.destroy((err) => {
      if (err) throw new Error('Ошибка!')
    })
  }
}
