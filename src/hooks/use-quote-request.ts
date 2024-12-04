import quoteRequestAction from "@/apis/quote-request.api";
import { CreateQuoteRequestType } from "@/schema/quote-request.schema";
import { ErrorType } from "@/types/error.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
const useQuoteRequest ={
    useCreateQuoteRequest(router: ReturnType<typeof useRouter>) {
        const queryClient = useQueryClient();
        return useMutation({
        mutationFn: (createQuoteRequestBody: CreateQuoteRequestType) =>
            quoteRequestAction.createQuoteRequest(createQuoteRequestBody),
        onSuccess: () => {
            queryClient.invalidateQueries({
            queryKey: ["quote-request"],
            });
            router.push("/quote-request");
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
            return result;
            } catch (error) {
            console.error("Error during get quote request:", error);
            throw error;
            }
        },
        retry: 0,
        });
    },
    useGetQuoteRequestDetail(quoteRequestId: string) {
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
    useGetPackageDetail(quoteReqDetailsId: string) {
        return useQuery({
        queryKey: ["package-detail", quoteReqDetailsId],
        queryFn: async () => {
            try {
            const result = await quoteRequestAction.getPackageDetails(quoteReqDetailsId);
            return result;
            } catch (error) {
            console.error("Error during get package details:", error);
            throw error;
            }
        },
        retry: 0,
        });
    },
    useGetCustomerInfo() {
        return useQuery({
        queryKey: ["customers"],
        queryFn: async () => {
            try {
            const result = await quoteRequestAction.getCustomerInfo();
            return result;
            } catch (error) {
            console.error("Error during get customer info:", error);
            throw error;
            }
        },
        retry: 0,
        });
    },
}
export default useQuoteRequest