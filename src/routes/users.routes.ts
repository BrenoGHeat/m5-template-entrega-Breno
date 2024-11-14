import { Router } from "express";
import { container } from "tsyringe";
import { UsersServices } from "../services/users.services";
import { UsersControllers } from "../controllers/users.controllers";

export const usersRouter = Router();

container.registerSingleton("UserServices", UsersServices);
const userControllers = container.resolve(UsersControllers);

usersRouter.post("/" , )


usersRouter.post("/login", )


usersRouter.get("/profile", )