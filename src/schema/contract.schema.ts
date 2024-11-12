import { z } from "zod";

export const CreateContractBody = z.object({
  startDate: z.string(),
  endDate: z.string(),
  status: z.string(),
  contractDate: z.string(),
  employeeId: z.string(),
  quotationId: z.string(),
});

export const UpdateContractBody = z.object({
  startDate: z.string(),
  endDate: z.string(),
  contractDate: z.string(),
  status: z.string(),
});

export const CreateContractRes = z.object({});

export type UpdateContractType = z.TypeOf<typeof UpdateContractBody>;
