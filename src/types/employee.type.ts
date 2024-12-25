import { z } from "zod";

export const EmployeeSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  position: z.string(),
  dob: z.string().datetime(),
  coefficientSalary: z.number(),
  baseSalary: z.number(),
  user: z.object({
    roleId: z.string().uuid(),
    role: z.object({
      name: z.string(),
    }),
  }),
});

export type EmployeeResType = z.infer<typeof EmployeeSchema>;
