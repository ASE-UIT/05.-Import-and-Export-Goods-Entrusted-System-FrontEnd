import shipmentTrackingAction from "@/apis/shipment-tracking.api";
import { UpdateShipmentTrackingBodyType } from "@/schema/shipmentTracking.schema";
import { ErrorType } from "@/types/error.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useShipmentTracking = {
  useGetShipmentTracking(
    shipmentId?: string,
    location?: string,
    status?: string
  ) {
    return useQuery({
      queryKey: ["shipment-tracking"],
      queryFn: async () => {
        try {
          const result = await shipmentTrackingAction.getShipmentTracking(
            shipmentId,
            location,
            status
          );
          return result.data;
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
        shipmentId,
        updateDetails,
      }: {
        shipmentId: string;
        updateDetails: UpdateShipmentTrackingBodyType;
      }) =>
        shipmentTrackingAction.updateShipmentTracking(
          shipmentId,
          updateDetails
        ),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["shipment-tracking"],
        });
      },
      onError: (error: ErrorType) => {
        console.error("Error during shipment tracking update:", error);
        throw error;
      },
    });
  },
};

export default useShipmentTracking;
