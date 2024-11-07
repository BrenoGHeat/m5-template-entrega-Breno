
import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import {
  TTaskCreate,
  TTaskResponseWithoutCategory,
  TTaskUpdate,
  TTaskResponseWithCategory,
} from "../interfaces/tasks.interfaces";
import {
  responseTaskSchemaWithCategory,
  responseTaskSchemaWithoutCategory,
} from "../schemas/task.schema";

@injectable()
export class TasksServices {
  async getTasks(search?: string): Promise<TTaskResponseWithCategory[]> {
    if (search) {
      const tasks = await prisma.task.findMany({
        where: {
          category: { name: { contains: search, mode: "insensitive" } },
        },
      });

      return responseTaskSchemaWithCategory.array().parse(tasks);
    }

    const tasks = await prisma.task.findMany();

    return responseTaskSchemaWithCategory.array().parse(tasks);
  }

  async deleteTask(id: number) {
    await prisma.task.delete({ where: { id: id } });
  }

  async createTask(body: TTaskCreate): Promise<TTaskResponseWithoutCategory> {
    const task = await prisma.task.create({ data: body });

    return responseTaskSchemaWithoutCategory.parse(task);
  }

  async updateTask(
    body: TTaskUpdate,
    id: number
  ): Promise<TTaskResponseWithoutCategory> {
    const task = await prisma.task.update({ where: { id: id }, data: body });

    return responseTaskSchemaWithoutCategory.parse(task);
  }

  async getTaskById(id: number): Promise<TTaskResponseWithCategory> {
    const taskById = await prisma.task.findFirst({ where: { id: id } });

    return responseTaskSchemaWithCategory.parse(taskById);
  }
}
