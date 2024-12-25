import salesContractAction from "@/apis/document/sales-contract.api";
import { CreateSalesContractType } from "@/schema/document/sales-contract.schema";
import { ErrorType } from "@/types/error.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "./use-toast";

export const useSalesContract = {
    useCreateSalesContract() {
        const queryClient = useQueryClient();
        return useMutation({
            mutationFn: (createSalesContract: CreateSalesContractType) =>
                salesContractAction.createDocument(createSalesContract),
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["document"],
                });
                toast({
                    title: "Create success",
                    description: "Document created successfully",
                    duration: 10000,
                });
            },
            onError: (error: ErrorType) => {
                console.error("Error during create:", error);
                toast({
                    title: "Create failed",
                    description: "An error occurred while creating document",
                    variant: "destructive",
                    duration: 5000,
                });
                throw error;
            },
        });
    },
    useGetSaleContractById(id: string) {
        return useQuery({
            queryKey: ["document", id],
            queryFn: async () => {
                try {
                    const result =
                        await salesContractAction.getDocumentById(id);
                    return result;
                } catch (error) {
                    console.error("Error during get document:", error);
                    throw error;
                }
            },
            retry: 0,
        });
    },

    useGetShipmentById(id?: string) {
        return useQuery({
            queryKey: ["shipment", id],
            enabled: !!id,
            queryFn: () => {
                return salesContractAction.getShipment(id);
            },
        });
    },
};
