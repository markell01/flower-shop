import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { usecases } from './usecases';
import { RegisterUsecase } from './usecases/register.usecase';
import { LoginUsecase } from './usecases/login.usecase';

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [RegisterUsecase, LoginUsecase],
})
export class AuthModule {}
