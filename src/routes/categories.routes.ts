import { Router, Request, Response } from "express";
import { CategoriesServices } from "../services/categories.services";
import { container } from "tsyringe";
import { CategoriesControllers } from "../controllers/categories.controllers";
import { ValidateBody } from "../middlewares/ValidateBody.middleware";
import { createCategorySchema } from "../schemas/category.schema";
import { IsCategoryIdValid } from "../middlewares/isCategoryIdValid.middleware";

export const categoriesRouter = Router();

container.registerSingleton("CategoriesServices", CategoriesServices);

const categoriesControllers = container.resolve(CategoriesControllers);

categoriesRouter.post(
  "/",
  ValidateBody.execute(createCategorySchema),
  (req, res) => categoriesControllers.createCategory(req, res)
);

categoriesRouter.delete("/:id", IsCategoryIdValid.execute, (req, res) =>
  categoriesControllers.deleteCategory(req, res)
);
