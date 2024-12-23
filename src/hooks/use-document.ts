import importDocumentAction from "@/apis/document/importCusDec.api";
import { importDocumentData } from "@/schema/document/importDocument.schema";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";

export const useDocument = () => {
  const queryClient = useQueryClient();

  const useGetImportDocumentById = (id: number) => {
    return useQuery({
      queryKey: ["importDocument", id],
      queryFn: () => {
        return importDocumentAction.getImportDocument(id);
      },
    });
  };

  const useCreateImportDocument = () => {
    return useMutation({
      mutationFn: (data: importDocumentData) =>
        importDocumentAction.createImportDocument(data),
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["importDocument"],
        });
      },
    });
  };

  return {
    queryClient,
    useGetImportDocumentById,
    useCreateImportDocument,
  };
};
