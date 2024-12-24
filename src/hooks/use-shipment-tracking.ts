import shipmentTrackingAction from "@/apis/shipment-tracking.api";
import { UpdateShipmentTrackingBodyType } from "@/schema/shipmentTracking.schema";
import { ErrorType } from "@/types/error.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useShipmentTracking = {
  useGetShipmentTracking(
    shipmentId?: string,
    location?: string,
    status?: string,
    page?: number,
    limit?: number
  ) {
    return useQuery({
      queryKey: ["shipment-tracking"],
      queryFn: async () => {
        try {
          const result = await shipmentTrackingAction.getShipmentTracking(
            shipmentId,
            location,
            status,
            page,
            limit
          );
          return result;
        } catch (error) {
          console.error("Error during shipment tracking retrieval:", error);
          throw error;
        }
      },
      retry: 0,
    });
  },

  useUpdateShipmentTracking() {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: ({
        trackingId,
        updateDetails,
      }: {
        trackingId: string;
        updateDetails: UpdateShipmentTrackingBodyType;
      }) =>
        shipmentTrackingAction.updateShipmentTracking(
          trackingId,
          updateDetails
        ),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["shipment-tracking", "shipment"],
        });
      },
      onError: (error: ErrorType) => {
        console.error("Error during shipment tracking update:", error);
        throw error;
      },
    });
  },

  useGetShipment(
    contractId?: string,
    shipmentType?: string,
    page?: number,
    limit?: number
  ) {
    return useQuery({
      queryKey: ["shipment", contractId, shipmentType, page, limit],
      queryFn: async () => {
        try {
          const result = await shipmentTrackingAction.getShipment(
            contractId,
            shipmentType,
            page,
            limit
          );
          return result;
        } catch (error) {
          console.error("Error during shipment retrieval:", error);
          throw error;
        }
      },
      retry: 0,
    });
  },
};

export default useShipmentTracking;
