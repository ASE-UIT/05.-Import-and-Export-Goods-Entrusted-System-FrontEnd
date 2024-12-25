import airWaybillAction from "@/apis/document/airway-bill.api";
import {
    createDocumentBody,
    updateDocumentBody,
  } from "@/schema/air-waybill.schema";
  import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
  
  const useDocumentAirWayBill = {
    useGetDocumentById(shipmentId?: string, type?: string, docNumber?: string) {
      return useQuery({
        queryKey: ["document", shipmentId],
        queryFn: () => {
          return airWaybillAction.getDocument(shipmentId, type);
        },
      });
    },
  
    useCreateAirWaybill(router: AppRouterInstance) {
      const queryClient = useQueryClient();
      return useMutation({
        mutationFn: (data: createDocumentBody) =>
          airWaybillAction.createDocument(data),
        onSuccess: () => { router.push("/document/bill/airwaybill") },
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
          airWaybillAction.updateDocument(shipmentId, data),
        onSettled: () => {
          queryClient.invalidateQueries({
            queryKey: ["document", shipmentId],
          });
        },
      });
    },
  };
  
  export default useDocumentAirWayBill;
  