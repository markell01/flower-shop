import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthControllerTsController } from './auth/auth.controller.ts.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthControllerTsController],
  providers: [AppService],
})
export class AppModule {}
