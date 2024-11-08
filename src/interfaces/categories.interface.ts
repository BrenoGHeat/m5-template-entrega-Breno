import { z } from "zod";
import { createCategorySchema } from "../schemas/category.schema";

export type TCategoryCreate = z.infer<typeof createCategorySchema>;