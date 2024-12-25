import importCusDecAction from "@/apis/document/importCusDec.api";
import { toast } from "@/hooks/use-toast";
import { importCustomsDeclarationData } from "@/schema/document/import-customs-declaration.schema";
import { ErrorType } from "@/types/error.type";
import { useMutation, useQuery } from "@tanstack/react-query";


const useImportCusDec = {
    useGetImportCusDec: (docNum?: number, shipmentId?: string, type?: string) => {
        return useQuery({
            queryKey: ["importDocument", docNum, shipmentId, type],
            queryFn: () => {
                return importCusDecAction.getImportDocument(docNum, shipmentId, type);
            },
        });
    },

    useGetDetail(id: string) {
        return useQuery({
            queryKey: ["importDocument", id],
            queryFn: () => {
                return importCusDecAction.detail(id);
            },
        });
    },

    useCreateImportCusDec: () => {
        return useMutation({
            mutationFn: (data: importCustomsDeclarationData) => {
                return importCusDecAction.createImportDocument(data);
            },
            onError: (error: ErrorType) => {
                toast({
                    title: "Error",
                    description:  (error?.errors && error.errors[0]?.message) || error.message,
                    variant: "destructive"
                })
            }
        })
    },

}

export default useImportCusDec;