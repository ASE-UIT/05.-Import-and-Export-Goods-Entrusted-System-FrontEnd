import { z } from "zod";

export const CreateContractBody = z.object({
  startDate: z.string(),
  endDate: z.string(),
  status: z.string(),
  contractDate: z.string(),
  employeeId: z.string(),
  quotationId: z.string(),
});


export const CreateContractRes = z.object({
    
})