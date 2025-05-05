import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './usecases/dto/dto';
import { RegisterUsecase } from './usecases/register.usecase';

@Controller('auth')
export class AuthController {
  constructor(private readonly registerUsecase: RegisterUsecase) {}

  @Post()
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
}
