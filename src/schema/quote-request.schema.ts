import { z } from "zod";
export const createQuoteRequestBody = z
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

export const getQuoteRequest = z.array(
    z.object({
        id: z.string().uuid(),
        requestDate: z.date(),
        status: z.string(),
        customerId: z.string().uuid(),
        createdAt: z.date(),
        updatedAt: z.date()
    })
);
export const getQuoteRequestDetails =  z.object({
        id: z.string().uuid(),
        origin: z.string(),
        destination: z.string(),
        shipmentReadyDate: z.date(),
        shipmentDeadline: z.date(),
        cargoInsurance: z.boolean(),
        quoteReqId: z.string().uuid(),
        createdAt: z.date(),
        updatedAt:  z.date()
    });
function mapToQuoteRequest(data: z.infer<typeof getQuoteRequest>): QuoteRequest[] {
  return data.map((data) => ({
    quote_request_id: data.id,                // Assuming `id` is a stringified number
    customer_id: data.customerId,             // Assuming `customerId` is a stringified number
    request_date: new Date(data.requestDate).toDateString(),      // Converting Date to string
    status: data.status,
    create_at: new Date(data.createdAt).toDateString(),           // Converting Date to string
    update_at: new Date(data.updatedAt).toDateString()            // Converting Date to string
  }));
}

export type GetQuoteRequestType = z.TypeOf<typeof getQuoteRequest>;
export type GetQuoteRequestDetailsType = z.TypeOf<typeof getQuoteRequestDetails>;
export type CreateQuoteRequestType = z.TypeOf<typeof createQuoteRequestBody>;
export default mapToQuoteRequest;