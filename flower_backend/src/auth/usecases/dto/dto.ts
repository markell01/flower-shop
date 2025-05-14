import { Role } from "generated/prisma"

export class RegisterDto {
    username: string
    password: string
    firstname: string
    lastname: string
    role?: Role
}

export class LoginDto {
    username: string
    password: string
}

export class LogoutDto {
    session: string
}