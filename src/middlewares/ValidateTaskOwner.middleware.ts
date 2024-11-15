import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";

export class ValidateTaskOwner {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const task = await prisma.task.findFirst({
      where: { id: Number(req.params.id) },
    });
    if (task?.userId !== res.locals.decode.id) {
      throw new AppError(403, "This user is not the task owner");
    }

    next();
  }
}
