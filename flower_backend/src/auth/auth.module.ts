import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { RegisterUsecase } from './usecases/register.usecase';
import { LoginUsecase } from './usecases/login.usecase';
import { LogoutUsecase } from './usecases/logout.usecase';

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [RegisterUsecase, LoginUsecase, LogoutUsecase],
})
export class AuthModule {}
