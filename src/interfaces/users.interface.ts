import { z } from "zod";
import {
  responseUserSchema,
  userBodySchema,
  userLoginSchema,
  userSchema,
} from "../schemas/user.schema";

export type TUser = z.infer<typeof userSchema>;

export type TUserBody = z.infer<typeof userBodySchema>;

export type TUserReturn = z.infer<typeof responseUserSchema>;

export type TUserLogin = z.infer<typeof userLoginSchema>;

export type TLoginReturn = {
  accessToken: string;
  user: TUserReturn;
};
