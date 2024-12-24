import { z } from "zod";

const EmployeeSchema = z.object({
  id: z.string().nullable(),
  name: z.string().nullable(),
  email: z.string().email().nullable(),
  phone: z.string().nullable(),
  address: z.string().nullable(),
  position: z.string().nullable(),
  dob: z.string().nullable(),
  coefficientSalary: z.number().nullable(),
  baseSalary: z.number().nullable(),
});

const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  shortName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  taxId: z.string(),
  legalRep: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
  }),
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
  customerId: z.string().nullable(),
});

export type Employee = z.infer<typeof EmployeeSchema>;
export type Role = z.infer<typeof RoleSchema>;
export type User = z.infer<typeof UserSchema>;
export type Customer = z.infer<typeof CustomerSchema>;
