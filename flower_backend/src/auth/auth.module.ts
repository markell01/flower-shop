import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { usecases } from './usecases';
import { RegisterUsecase } from './usecases/register.usecase';

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [RegisterUsecase],
})
export class AuthModule {}
