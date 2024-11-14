import { z } from "zod";

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    email: z.string().min(1).email(),
    password: z.string().min(1),
});

export const userBodySchema = userSchema.omit({ id: true });

export const responseUserSchema = userSchema.omit({ password: true });

export const userLoginSchema = userSchema.omit({ id: true, name: true });

