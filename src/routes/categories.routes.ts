import { Router , Request, Response} from "express";
import { CategoriesServices } from "../services/categories.services";
import { container } from "tsyringe";
import { CategoriesControllers } from "../controllers/categories.controllers";

export const categoriesRouter = Router();

container.registerSingleton("CategoriesServices", CategoriesServices);

const categoriesControllers = container.resolve(CategoriesControllers);

categoriesRouter.post("/" , );

categoriesRouter.delete("/:id", );
