import express, { json } from "express";
import helmet from "helmet";
import { tasksRouter } from "./routes/tasks.routes";
import { categoriesRouter } from "./routes/categories.routes";
import { TasksControllers } from "./controllers/tasks.controllers";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/tasks", tasksRouter);

app.use("/categories", categoriesRouter);