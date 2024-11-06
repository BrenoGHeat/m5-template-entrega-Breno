import { z } from "zod";
import { categorySchema } from "./category.schema";

export const taskSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    content: z.string().min(1),
    finished: z.boolean().default(false),
    categoryId: z.number().nullable(),
    category: categorySchema.nullable(),
});


export const createTaskSchema = taskSchema.pick({ title: true, content: true, categoryId: true });

export const responseTaskSchemaWithoutCategory = taskSchema.omit({category: true});

export const responseTaskSchemaWithCategory = taskSchema.omit({categoryId: true});

export const updateTaskSchema = taskSchema.omit({id: true, category: true}).partial();