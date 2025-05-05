import { Body, Controller, Post, Session } from '@nestjs/common';
import { LoginDto, RegisterDto } from './usecases/dto/dto';
import { RegisterUsecase } from './usecases/register.usecase';
import { LoginUsecase } from './usecases/login.usecase';
import session from 'express-session';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUsecase: RegisterUsecase,
    private readonly loginUsecase: LoginUsecase
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
}
