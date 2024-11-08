import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";
import { ZodError } from "zod";

export class HandleErrors {
  static execute(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({ message : err.message });
    } 
    if (err instanceof ZodError) {
      const error = {errors: err.issues};
        return res.status(400).json(error);
      }
      return res.status(500).json({ error: "Internal server error." });  
  }
}
