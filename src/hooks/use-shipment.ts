import shipmentAction from "@/apis/shipment.api";
import { useQueryClient, useQuery, useQueries, useMutation } from "@tanstack/react-query";
import {
  createShipmentData,
  updateShipmentData,
} from "@/schema/shipment.schema";
import contractAction from "@/apis/contract.api";
import { IShipment } from "@/types/shipment.d";
export const useShipment = () => {
  const queryClient = useQueryClient();

  const useGetAllShipment = () => {
    return useQuery({
      queryKey: ["shipments"], // query key
      queryFn: async () => {
        // Gọi API và trả về mảng các shipment
        const response = await shipmentAction.getShipment();
        return response.data?.results as IShipment[]; // Trả về mảng các shipment
      },
      select: (data) => {
        // Lọc thông tin theo yêu cầu từ dữ liệu API
        return data.map((shipment) => ({
          shipmentId: shipment.id,
          shipmentType: shipment.shipmentType,
          price: shipment.contract.quotation.totalPrice,
          endDate: shipment.contract.endDate,
          location: shipment.tracking.location,
          origin: shipment.contract.quotation.quotationReq.quoteReqDetails.origin,
          destination: shipment.contract.quotation.quotationReq.quoteReqDetails.destination,
          status: shipment.tracking.status,
          client: shipment.contract.quotation.quotationReq.customer.name
        }));
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