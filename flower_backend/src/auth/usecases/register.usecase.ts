import { BadRequestException, Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { Role } from 'generated/prisma'
import { prisma } from 'src/utils/prisma'

@Injectable()
export class RegisterUsecase {
  async addUser(
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    role?: Role
  ) {
    if (await this.checkUser(username)) {
      throw new BadRequestException('User is already exists')
    }
    const hash = await this.hashPassword(password)
    return await prisma.user.create({
      data: {
        username,
        password: hash,
        firstname,
        lastname,
        role
      },
      omit: {
        password: true
      }
    })
  }

  async hashPassword(password: string) {
    const saltRound = 10
    const salt: string = await bcrypt.genSalt(saltRound)
    const hash: string = await bcrypt.hash(password, salt)
    console.log('hash:', hash)
    return hash
  }

  async checkUser(username: string) {
    return await prisma.user.findUnique({
      where: {
        username
      }
    })
  }
}
