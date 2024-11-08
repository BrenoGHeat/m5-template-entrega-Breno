import { Request, Response, NextFunction } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";

export class IsCategoryBodyValid {
  static async execute(req: Request, res: Response, next: NextFunction) {
    if (req.body.categoryId) {
      const found = await prisma.category.findFirst({
        where: { id: Number(req.body.categoryId) },
      });
      if (!found) {
        throw new AppError(404, "Category not found");
      }
    }

    next();
  }
}
