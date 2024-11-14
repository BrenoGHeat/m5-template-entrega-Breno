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
        include: { category: true },
      });

      return responseTaskSchemaWithCategory.array().parse(tasks);
    }

    const tasks = await prisma.task.findMany({ include: { category: true } });

    return responseTaskSchemaWithCategory.array().parse(tasks);
  }

  async deleteTask(id: number) {
    await prisma.task.delete({ where: { id: id } });
  }

  async createTask(body: TTaskCreate , userId: number ): Promise<TTaskResponseWithoutCategory> {
    const task = await prisma.task.create({ data: {...body, userId: userId} });

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
    const taskById = await prisma.task.findFirst({
      where: { id: id },
      include: { category: true },
    });

    return responseTaskSchemaWithCategory.parse(taskById);
  }
}
