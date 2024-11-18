import { Router } from "express";
import { container } from "tsyringe";
import { UsersServices } from "../services/users.services";
import { UsersControllers } from "../controllers/users.controllers";
import { ValidateEmail } from "../middlewares/ValidateEmail.middleware";
import { ValidateBody } from "../middlewares/ValidateBody.middleware";
import { userLoginSchema, userRegisterSchema } from "../schemas/user.schema";
import { ValidateToken } from "../middlewares/ValidateToken.middleware";

export const usersRouter = Router();

container.registerSingleton("UserServices", UsersServices);

const userControllers = container.resolve(UsersControllers);

usersRouter.post(
  "/",
  ValidateBody.execute(userRegisterSchema),
  ValidateEmail.execute,
  (req, res) => userControllers.register(req, res)
);

usersRouter.post(
  "/login",
  ValidateBody.execute(userLoginSchema),
  (req, res) => userControllers.login(req, res)
);

usersRouter.get("/profile", ValidateToken.execute, (req, res) =>
  userControllers.getProfile(req, res)
);
