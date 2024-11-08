import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { prisma } from "../database/prisma";

export class IsCategoryIdValid {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const found = await prisma.category.findFirst({
      where: { id: Number(req.params.id) },
    });
    if (!found) {
      throw new AppError(404, "Category not found");
    }

    next();
  }
}
