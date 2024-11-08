import { Request, Response } from "express";


export class CategoriesControllers{


    async createCategory( req: Request, res: Response){

        const body = req.body;

        const category = this.CategoriesServices.createCategory(body);

        return res.status(201).json(category);
    }
}