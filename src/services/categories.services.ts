import { prisma } from "../database/prisma";
import { createCategorySchema } from "../schemas/category.schema";
import { injectable } from "tsyringe";

@injectable()
export class CategoriesServices {
  async createCategories(body: createCategorySchema ) {
    const categorie = await prisma.category.create({ data: body });

    return categorie;
  }

  async deleteCategories(id: number) {
   
    const data = await prisma.category.delete({ where: { id } });

  }
}
