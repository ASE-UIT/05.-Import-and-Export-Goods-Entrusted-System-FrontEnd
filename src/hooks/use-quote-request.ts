import quoteRequestAction from "@/apis/quote-request.api";
import { CreateQuoteRequestType, UpdateQuoteRequestType } from "@/schema/quote-request.schema";
import { ErrorType } from "@/types/error.type";
import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "./use-toast";
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
            toast({
                title: "Create success",
                description: "Quote request created successfully",
                duration: 10000
            });
            router.push("/quote-request");
        },
        onError: (error: ErrorType) => {
            console.error("Error during create:", error);
            toast({
            title: "Create failed",
            description: "An error occurred while creating quote request",
            variant: "destructive",
            duration: 5000,
          });
            throw error;
        },
        });
    },

    useUpdateQuoteRequest(
    id: string,
    router: ReturnType<typeof useRouter>
  ): UseMutationResult<unknown, ErrorType, Partial<UpdateQuoteRequestType>> {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (updateQuoteRequestBody: Partial<UpdateQuoteRequestType>) =>
        quoteRequestAction.updateQuoteRequest(id, updateQuoteRequestBody),
        onSuccess: () => {
            queryClient.invalidateQueries({
            queryKey: ["quote-request"],
            });
            toast({
                title: "Update success",
                description: "Quote request updated successfully",
                duration: 10000
            });
            router.push("/quote-request");
        },
        onError: (error: ErrorType) => {
            console.error("Error during update:", error);
            toast({
            title: "Update failed",
            description: "An error occurred while updating quote request",
            variant: "destructive",
            duration: 5000,
          });
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
    useGetFullQuoteRequestDetail(quoteRequestId: string) {
        return useQuery({
        queryKey: ["quote-request-full-detail", quoteRequestId],
        queryFn: async () => {
            try {
            const result = await quoteRequestAction.getFullQuoteRequestDetails(quoteRequestId);
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