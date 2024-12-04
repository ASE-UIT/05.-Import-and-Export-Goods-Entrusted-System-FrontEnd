import http from "@/utils/http";
import {
    createShipmentData,
    updateShipmentData,
    
} from "@/schema/shipment.schema"

const shipmentAction={
    async getShipment(id?: string) {
        const res = await http.get<EximResponseWrapper<IShipment[]>>(
          "/v1/shipment",
          {
            params: {
              id,
            },
          }
        );
        return res.data;
      },
    

    async createShipment(data: createShipmentData){
        const res =await http.post<EximResponseWrapper>(`/v1/shipment`,data);
        return res.data;
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