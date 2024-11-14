import { z } from "zod";
import {
 
  userLoginSchema,
  userRegisterSchema,
  userResponseSchema,
  userSchema,
} from "../schemas/user.schema";

export type TUser = z.infer<typeof userSchema>;

export type TUserRegister = z.infer<typeof userRegisterSchema>;

export type TUserResponse = z.infer<typeof userResponseSchema>;

export type TUserLogin = z.infer<typeof userLoginSchema>;

export type TLoginReturn = {
  accessToken: string;
  user: TUserResponse;
};
