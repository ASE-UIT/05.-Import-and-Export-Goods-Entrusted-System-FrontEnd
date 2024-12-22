import { z } from "zod";

export const CreateEmployeeBody = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    address: z.string().min(1),
    position: z.enum([
      "MANAGER",
      "ACCOUNTANT",
      "SALES",
      "CUSTOMER_SERVICE",
      "HUMAN_RESOURCES",
      "DOCUMENTATION",
    ]),
    dob: z.string(),
    coefficientSalary: z.coerce.number().min(0).positive(),
    baseSalary: z.coerce.number().min(0).positive(),
  })
  .strict();

export const updateEmployeeBody = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    address: z.string().min(1),
    position: z.enum([
      "MANAGER",
      "ACCOUNTANT",
      "SALES",
      "CUSTOMER_SERVICE",
      "HUMAN_RESOURCES",
      "DOCUMENTATION",
    ]),
    dob: z.string(),
    coefficientSalary: z.coerce.number().min(0).positive(),
    baseSalary: z.coerce.number().min(0).positive(),
  })
  .strict();

export type CreateEmployeeBodyType = z.infer<typeof CreateEmployeeBody>;
export type UpdateEmployeeBodyType = z.infer<typeof updateEmployeeBody>;
