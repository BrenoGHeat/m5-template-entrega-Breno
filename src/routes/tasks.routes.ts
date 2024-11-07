import { Router, Request, Response } from "express";
import { TasksControllers } from "../controllers/tasks.controllers";
import { IsTaskIdValid } from "../middlewares/IsTaskIdValid.middleware";
import { TasksServices } from "../services/tasks.services";
import { container } from "tsyringe";
import { ValidateBody } from "../middlewares/ValidateBody.middleware";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema";

export const tasksRouter = Router();

container.registerSingleton("TasksServices", TasksServices);

const tasksControllers = container.resolve(TasksControllers);

tasksRouter.post("/", ValidateBody.execute(createTaskSchema), (req, res) => tasksControllers.createTask(req, res));

tasksRouter.get("/", (req, res) => tasksControllers.getTasks(req, res));

tasksRouter.get("/:id", IsTaskIdValid.execute, (req, res) =>
  tasksControllers.getTaskById(req, res)
);

tasksRouter.patch("/:id", ValidateBody.execute(updateTaskSchema), IsTaskIdValid.execute, (req, res) =>
  tasksControllers.updateTask(req, res)
);

tasksRouter.delete("/:id", IsTaskIdValid.execute, (req, res) =>
  tasksControllers.deleteTask(req, res)
);
