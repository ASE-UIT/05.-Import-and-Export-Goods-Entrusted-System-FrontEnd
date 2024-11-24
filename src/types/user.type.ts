import { z } from "zod";

const EmployeeSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  position: z.string(),
  dob: z.string(),
  coefficientSalary: z.number(),
  baseSalary: z.number(),
});

const RoleSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  role: RoleSchema,
  employee: EmployeeSchema,
});

export type Employee = z.infer<typeof EmployeeSchema>;
export type Role = z.infer<typeof RoleSchema>;
export type User = z.infer<typeof UserSchema>;
