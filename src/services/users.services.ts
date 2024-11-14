import { injectable } from "tsyringe";
import { userResponseSchema } from "../schemas/user.schema";
import { prisma } from "../database/prisma";
import {
  TUserLogin,
  TUserRegister,
  TUserResponse,
} from "../interfaces/users.interface";
import bcrypt from "bcrypt";
import { AppError } from "../errors/AppError";
import jwt from "jsonwebtoken";

@injectable()
export class UsersServices {
  async register(body: TUserRegister): Promise<TUserResponse> {
    const hashPassword = await bcrypt.hash(body.password, 10);

    const newUser = { ...body, password: hashPassword };

    const user = await prisma.user.create({ data: newUser });

    return userResponseSchema.parse(user);
  }

  async login(body: TUserLogin) {
    const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET as string, {
      expiresIn: "24h",
    });

    const user = await prisma.user.findFirst({ where: { email: body.email } });

    if (!user) {
      throw new AppError(404, "User not exists");
    }

    const compare = await bcrypt.compare(body.password, user.password);

    if (!compare) {
      throw new AppError(403, "Email and password doesn't match");
    }

    return {
      accessToken: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }

  async getProfile(userId: number){
   
  }

}