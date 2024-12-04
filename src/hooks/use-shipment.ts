import shipmentAction from "@/apis/shipment.api";
import { useQueryClient, useQuery, useQueries, useMutation } from "@tanstack/react-query";
import {
  createShipmentData,
  updateShipmentData,
} from "@/schema/shipment.schema";
import contractAction from "@/apis/contract.api";
export const useShipment = () => {
  const queryClient = useQueryClient();

  const useGetAllShipment = () => {
    return useQuery({
      queryKey: ["shipments"],
      queryFn: () => {
        return shipmentAction.getShipment();
      },
    });
  };
 

  const useCreateShipment = () => {
    return useMutation({
      mutationFn: (data: createShipmentData) =>
        shipmentAction.createShipment(data),
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["shipments"],
        }); 
      },
    });
  };

  const useUpdateShipment = () => {
    return useMutation({
      mutationFn: ({ id, data }: { id: string; data: updateShipmentData }) =>
        shipmentAction.updateShipment(id, data),
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ["shipments"],
        });
      },
    });
  };

  const useGetShipmentById = (id: string) => {
    return useQuery({
      queryKey: ["shipment", id],
      queryFn: () => {
        return shipmentAction.getShipment(id)
      },
    });
  };

  return {
    queryClient,
    useGetAllShipment,
    useCreateShipment,
    useUpdateShipment,
    useGetShipmentById,
  };
};