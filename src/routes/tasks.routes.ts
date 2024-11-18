import { Router, Request, Response } from "express";
import { TasksControllers } from "../controllers/tasks.controllers";
import { IsTaskIdValid } from "../middlewares/IsTaskIdValid.middleware";
import { TasksServices } from "../services/tasks.services";
import { container } from "tsyringe";
import { ValidateBody } from "../middlewares/ValidateBody.middleware";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema";
import { IsCategoryBodyValid } from "../middlewares/isCategoryIdBodyValid.middleware";
import { ValidateTaskOwner } from "../middlewares/ValidateTaskOwner.middleware";
import { ValidateToken } from "../middlewares/ValidateToken.middleware";

export const tasksRouter = Router();

container.registerSingleton("TasksServices", TasksServices);

const tasksControllers = container.resolve(TasksControllers);

tasksRouter.use(ValidateToken.execute);

tasksRouter.post(
  "/",
  ValidateBody.execute(createTaskSchema),
  IsCategoryBodyValid.execute,
  (req, res) => tasksControllers.createTask(req, res)
);

tasksRouter.get("/", (req, res) => tasksControllers.getTasks(req, res));

tasksRouter.get("/:id", IsTaskIdValid.execute, ValidateTaskOwner.execute, (req, res) =>
  tasksControllers.getTaskById(req, res)
);

tasksRouter.patch(
  "/:id",
  ValidateBody.execute(updateTaskSchema),
  IsCategoryBodyValid.execute,
  IsTaskIdValid.execute,
  ValidateTaskOwner.execute,
  (req, res) => tasksControllers.updateTask(req, res)
);

tasksRouter.delete("/:id", IsTaskIdValid.execute, ValidateTaskOwner.execute, (req, res) =>
  tasksControllers.deleteTask(req, res)
);
