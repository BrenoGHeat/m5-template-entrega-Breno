import { prisma } from "../database/prisma";
import { TCategoryCreate } from "../interfaces/categories.interface";
import { createCategorySchema } from "../schemas/category.schema";
import { injectable } from "tsyringe";

@injectable()
export class CategoriesServices {
  async createCategory ( body: TCategoryCreate ) {
    const categorie = await prisma.category.create({ data: body });

    return categorie;
  }

  async deleteCategory(id: number) {
   
    await prisma.category.delete({ where: { id } });

  }
}
