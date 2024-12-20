import { z } from "zod";

export const CreateEmployeeBody = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    address: z.string().min(1),
    position: z.object({}),
    dob: z.string(),
    coefficientSalary: z.number().min(0),
    baseSalary: z.number().min(0),
  })
  .strict();

export type CreateEmployeeBodyType = z.infer<typeof CreateEmployeeBody>;
