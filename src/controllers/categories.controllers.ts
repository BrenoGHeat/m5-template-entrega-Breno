import { Request, Response } from "express";
import { CategoriesServices } from "../services/categories.services";
import { inject, injectable } from "tsyringe";


@injectable()
export class CategoriesControllers{
    constructor(@inject("CategoriesServices") private categoriesServices: CategoriesServices ){}
    
    async createCategory( req: Request, res: Response){

        const body = req.body;

        const category = await this.categoriesServices.createCategory(body);

        return res.status(201).json(category);
    }

    async deleteCategory(req: Request, res: Response){
       
        await this.categoriesServices.deleteCategory(Number(req.params.id));
        
        return res.status(204).json();
      }

}