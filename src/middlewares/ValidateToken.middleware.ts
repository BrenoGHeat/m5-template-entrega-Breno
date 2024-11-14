import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import jwt from "jsonwebtoken";

export class ValidateToken{ 
    static execute(req: Request, res: Response, next: NextFunction){
        const authorization = req.headers.authorization;
    }
}