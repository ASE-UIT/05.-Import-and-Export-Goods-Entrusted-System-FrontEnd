import { z } from "zod";

export const LoginBody = z
  .object({
    username: z.string().min(1),
    password: z
      .string()
      .min(6, "Password must have at least 6 characters.")
      .regex(/[A-Z]/, "Password must contain at least 1 capital letter.")
      .regex(/[a-z]/, "Password must contain at least 1 lower case letter.")
      .regex(/[0-9]/, "Password must contain at least 1 number.")
      .regex(
        /[#?!@$%^&*-]/,
        "Password must contain at least 1 special character."
      ),
  })
  .strict();

export const AuthRes = z.object({
  message: z.string(),
  data: z.object({
    id: z.string().uuid(),
    username: z.string(),
    employee: z.object({
      id: z.string().uuid(),
      name: z.string(),
      email: z.string(),
      phone: z.string(),
      address: z.string(),
      position: z.string(),
      dob: z.string(),
      coefficientSalary: z.number(),
      baseSalary: z.number(),
    }),
    role: z.object({
      id: z.string().uuid(),
      name: z.string(),
    }),
  }),
});

export type AuthResType = z.TypeOf<typeof AuthRes>;

export type LoginBodyType = z.TypeOf<typeof LoginBody>;
