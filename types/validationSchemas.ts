import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }).trim(),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" })
    .trim(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});
export type RegisterSchema = z.infer<typeof registerSchema>;
