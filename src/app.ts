import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import { tasksRouter } from "./routes/tasks.routes";
import { categoriesRouter } from "./routes/categories.routes";
import { HandleErrors } from "./errors/handleErrors.middleware";
import { usersRouter } from "./routes/users.routes";

export const app = express();

app.use(json());

app.use(helmet());

app.use("/tasks", tasksRouter);

app.use("/categories", categoriesRouter);

app.use("/users", usersRouter);

app.use(HandleErrors.execute);

