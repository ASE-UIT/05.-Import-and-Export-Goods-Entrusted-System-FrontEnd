import exportCusDecAction from "@/apis/document/exportCusDec.api";
import { toast } from "@/hooks/use-toast";
import { exportCustomsDeclarationData } from "@/schema/document/export-customs-declaration.schema";
import { ErrorType } from "@/types/error.type";
import { useMutation, useQuery } from "@tanstack/react-query";

const useExportCusDec = {
  useGetExportCusDec: (docNum?: number, shipmentId?: string, type?: string) => {
    return useQuery({
      queryKey: ["exportDocument", docNum, shipmentId, type],
      queryFn: () => {
        return exportCusDecAction.getExportDocument(docNum, shipmentId, type);
      },
    });
  },

  useGetDetail(id: string) {
    return useQuery({
      queryKey: ["exportDocument", id],
      queryFn: () => {
        return exportCusDecAction.detail(id);
      },
    });
  },

  useCreateExportCusDec: () => {
    return useMutation({
      mutationFn: (data: exportCustomsDeclarationData) => {
        return exportCusDecAction.createExportDocument(data);
      },
      onError: (error: ErrorType) => {
        toast({
          title: "Error",
          description:
            (error?.errors && error.errors[0]?.message) || error.message,
          variant: "destructive",
        });
      },
    });
  },
};

export default useExportCusDec;
