import { Injectable } from "@nestjs/common";
import { prisma } from "src/utils/prisma";


@Injectable()
export class LogoutUsecase {
  async logout(session_id: string) {
    const res = await prisma.session.delete({
      where: { id: session_id }
    })

    if (!res) { throw new Error('Что-то пошло не так!') }

    return res;
  }
}