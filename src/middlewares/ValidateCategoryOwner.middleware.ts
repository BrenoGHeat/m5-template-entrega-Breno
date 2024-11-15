import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";

export class ValidateCategoryOwner {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const category = await prisma.category.findFirst({
      where: { id: Number(req.params.id) },
    });
    if (category?.userId !== res.locals.decode.id) {
      throw new AppError(403, "This user is not the category owner");
    }

    next();
  }
}
