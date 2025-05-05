import { BadRequestException, Injectable } from "@nestjs/common";
import { prisma } from "src/utils/prisma";
import * as bcrypt from "bcrypt";

@Injectable()
export class LoginUsecase {
    async login(username: string, password: string) {
        const user = await prisma.user.findUnique({
            where: { username },
        })

        if (!user) { throw new BadRequestException('No such user') }

        const compare = await bcrypt.compare(password, user.password)
        if (!compare) { throw new BadRequestException('Wrong password') }

        const session = await prisma.session.create({
            data: { user_id: user.id }
        })

        return {
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            session: session.id
        };
    }
}