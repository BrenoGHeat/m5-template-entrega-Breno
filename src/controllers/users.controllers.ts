import { inject, injectable } from "tsyringe";
import { UsersServices } from "../services/users.services";
import { Request, Response } from "express";

@injectable()
export class UsersControllers{
    constructor(@inject("UserServices") private usersServices: UsersServices ){}

    async register(req: Request, res: Response){
        const body = req.body;

        const task = await this.usersServices.register(body);

        return res.status(201).json(task);
    }


    async login(req: Request, res: Response){
        
        const body = req.body;

        const task = await this.usersServices.login(body);

        return res.status(200).json(task);

    }

    async getProfile(req: Request, res: Response){
       
        const taskById = await this.usersServices.getProfile(Number(res.locals.decode.id))

        return res.status(200).json(taskById);

    }

}