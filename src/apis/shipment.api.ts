import { IShipmentResponse } from "../types/shipment";
import http from "@/utils/http";
import {
    createShipmentData,
    updateShipmentData,
    
} from "@/schema/shipment.schema"
import { log } from 'console';

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

      
    

    // async createShipment(data: createShipmentData){
    //     const res =await http.post<EximResponseWrapper>(`/v1/shipment`,data);
    //     return res.data;
    // },
    
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
}

export default shipmentAction;