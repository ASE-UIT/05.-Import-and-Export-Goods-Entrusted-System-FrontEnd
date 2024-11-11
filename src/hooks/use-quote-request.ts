import quoteRequestAction from "@/apis/quote-request.api";
import { CreateQuoteRequestType } from "@/schema/quote-request.schema";
import { ErrorType } from "@/types/error.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useQuoteRequest ={
    useCreateQuoteRequest() {
        const queryClient = useQueryClient();
        return useMutation({
        mutationFn: (createQuoteRequestBody: CreateQuoteRequestType) =>
            quoteRequestAction.createQuoteRequest(createQuoteRequestBody),
        onSuccess: () => {
            queryClient.invalidateQueries({
            queryKey: ["quote-request"],
            });
        },
        onError: (error: ErrorType) => {
            console.error("Error during create:", error);
            throw error;
        },
        });
    },

    useGetQuoteRequest() {
        return useQuery({
        queryKey: ["quote-request"],
        queryFn: async () => {
            try {
            const result = await quoteRequestAction.getQuoteRequest();
            console.log("Hello");;
            return result;
            } catch (error) {
            console.error("Error during get quote request:", error);
            throw error;
            }
        },
        retry: 0,
        });
    },
    useGetQuoteRequestDetail(quoteRequestId: string, p0: { enabled: boolean; }) {
        return useQuery({
        queryKey: ["quote-request-detail", quoteRequestId],
        queryFn: async () => {
            try {
            const result = await quoteRequestAction.getQuoteRequestDetails(quoteRequestId);
            return result;
            } catch (error) {
            console.error("Error during get quote request:", error);
            throw error;
            }
        },
        retry: 0,
        });
    },
}
export default useQuoteRequest