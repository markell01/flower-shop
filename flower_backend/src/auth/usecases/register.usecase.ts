/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import bcrypt from 'bcrypt'
import { prisma } from 'src/utils/prisma'

@Injectable()
export class RegisterUsecase {
  async addUser(
    username: string,
    password: string,
    name: string,
    lastname: string,
    role?: string
  ) {
    const { salt, hash } = await this.hashPassword(password)
    return await prisma.user.createFirst({
      data: {
        username,
        password: hash,
        name,
        lastname
      }
    })
  }

  async hashPassword(password: string) {
    const saltRound = 1000
    const salt: string = await bcrypt.genSalt(saltRound)
    const hash: string = await bcrypt.hash(password, salt)
    return { salt, hash }
  }
}
