import { NextFunction, Response, Request } from "express";
import { createTaskSchema } from "../schemas/task.schema";
import { AnyZodObject, ZodError } from "zod";

export class ValidateBody {
  static execute(schema: AnyZodObject) {
    return (req: Request, res: Response, next: NextFunction) => {
      schema.parse(req.body);

      next();
    };
  }
}
