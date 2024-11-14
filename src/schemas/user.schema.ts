import { z } from "zod";

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    email: z.string().min(1).email(),
    password: z.string().min(1),
});

export const userRegisterSchema = userSchema.omit({ id: true });

export const userResponseSchema = userSchema.omit({ password: true });

export const userLoginSchema = userSchema.omit({ id: true, name: true });

