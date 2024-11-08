import { Request, Response } from "express";


export class CategoriesControllers{

    async createCategory( req: Request, res: Response){

        const body = req.body;

        const category = this.CategoriesServices.createCategory(body);

        return res.status(201).json(category);
    }

    async delete(req: Request, res: Response){
       
        await this.CategoriesServices.delete(Number(req.params.id));
        
        return res.status(204).json();
      }

}