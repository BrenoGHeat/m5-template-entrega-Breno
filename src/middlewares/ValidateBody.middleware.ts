import { NextFunction, Response, Request } from "express";
import { createTaskSchema } from "../schemas/task.schema";
import { AnyZodObject, ZodError } from "zod";

export class ValidateBody {
  static execute(schema: AnyZodObject) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse(req.body);

        next();
      } catch (error) {
        if (error instanceof ZodError) {
          return res.status(404).json(error);
        }
      }
    };
  }
}
