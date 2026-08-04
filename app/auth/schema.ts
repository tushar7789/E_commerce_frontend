import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters."),
  password: z.string().min(8, "password should be at least 8 chars."),
});

export type UserFormValues = z.infer<typeof userSchema>;