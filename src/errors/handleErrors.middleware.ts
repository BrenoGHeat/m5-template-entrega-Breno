import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";
import { ZodError } from "zod";
import { JsonWebTokenError } from "jsonwebtoken";

export class HandleErrors {
  static execute(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({ message: err.message });
    }
    if (err instanceof ZodError) {
      const error = { errors: err.issues };
      return res.status(400).json(error);
    }

    if (err instanceof JsonWebTokenError) {
      return res.status(401).json({ message: err.message });
    }
    console.log(err);
    return res.status(500).json({ error: "Internal server error." });
  }
}
