import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";

export class ValidateEmail {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const found = await prisma.user.findFirst({
      where: { email: req.body.email },
    });
    if (found) {
      throw new AppError(409, "This email is already registered");
    }

    next();
  }
}