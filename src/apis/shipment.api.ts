import { IShipmentResponse } from './../types/shipment.d';
import http from "@/utils/http";
import {
    createShipmentData,
    updateShipmentData,
    
} from "@/schema/shipment.schema"


const shipmentAction={
    async getShipment(id?: string) {
        const res = await http.get<EximResponseWrapper<IShipmentResponse>>(
          "/v1/shipment",
          {
            params: {
              id,
            },
          }
        );
        return res.data;
      },
  
    async createShipment(data: createShipmentData) {
      try {
        const res = await http.post<EximResponseWrapper>(`/v1/shipment`, data);
        return res.data;
      } catch (error) {
        console.error("Error creating shipment:", error);
        throw error; // Ném lỗi ra để các phần khác xử lý
      }
    },
    

    async updateShipment(id: string, data: updateShipmentData) {
        const res = await http.patch<EximResponseWrapper>(
          `/v1/shipment/${id}`,
          data
        );
        return res.data;
      },

      async getContracts(params = {}) {
        try {
          const res = await http.get<EximResponseWrapper>(`/v1/contracts`, {
            params, // Các tham số lọc như quotationId, status, startDate...
          });
          return res.data;
        } catch (error) {
          console.error("Error fetching contracts:", error);
          throw error;
        }
      },
}

export default shipmentAction;