import { Router } from "express";
import { container } from "tsyringe";
import { UsersServices } from "../services/users.services";
import { UsersControllers } from "../controllers/users.controllers";
import { ValidateEmail } from "../middlewares/ValidateEmail.middleware";
import { ValidateBody } from "../middlewares/ValidateBody.middleware";
import { userRegisterSchema } from "../schemas/user.schema";

export const usersRouter = Router();

container.registerSingleton("UserServices", UsersServices);


const userControllers = container.resolve(UsersControllers);

usersRouter.post("/" , ValidateEmail.execute, ValidateBody.execute(userRegisterSchema), (req, res) => userControllers.register(req, res));


usersRouter.post("/login", )


usersRouter.get("/profile", )