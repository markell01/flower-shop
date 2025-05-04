import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthControllerTsController {
  @Post()
  async register(@Body() ) {

  }
}
