import documentAction from "@/apis/document.api";
import {
  createDocumentBody,
  updateDocumentBody,
} from "@/schema/air-waybill.schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useDocument = {
  useGetDocumentById(shipmentId?: string, type?: string, docNumber?: string) {
    return useQuery({
      queryKey: ["document", shipmentId],
      queryFn: () => {
        return documentAction.getDocument(shipmentId, type);
      },
    });
  },

  useCreateAirWaybill() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: createDocumentBody) =>
        documentAction.createDocument(data),
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["document"],
        });
      },
    });
  },
  useUpdateAirWaybill(shipmentId: string) {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: updateDocumentBody) =>
        documentAction.updateDocument(shipmentId, data),
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["document", shipmentId],
        });
      },
    });
  },
};

export default useDocument;
