import { Router , Request, Response} from "express";
import { TasksControllers } from "../controllers/tasks.controllers";

export const tasksRouter = Router();

const tasksControllers = new TasksControllers();

tasksRouter.post("/" , tasksControllers.createTask );

tasksRouter.get("/" , tasksControllers.getTasks );

tasksRouter.get("/:id" , tasksControllers.getTaskById);

tasksRouter.patch("/:id" , tasksControllers.updateTask);

tasksRouter.delete("/:id", tasksControllers.deleteTask);
