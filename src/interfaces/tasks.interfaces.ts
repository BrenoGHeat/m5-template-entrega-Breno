import { z } from "zod";
import { createTaskSchema, responseTaskSchemaWithCategory, responseTaskSchemaWithoutCategory, updateTaskSchema } from "../schemas/task.schema";


export type TTaskCreate = z.infer<typeof createTaskSchema>;

export type TTaskResponseWithoutCategory = z.infer<typeof responseTaskSchemaWithoutCategory>;

export type TTaskResponseWithCategory = z.infer<typeof responseTaskSchemaWithCategory>;

export type TTaskUpdate = z.infer<typeof updateTaskSchema>;

