import { AirFreightBody } from "@/schema/air-freight.schema";
import http from "@/utils/http";

export const airFreightApi = {
  getAllAirFreight: async () => {
    const response = await http.get<
      EximResponseWrapper<PaginationWrapper<AirFreight[]>>
    >("v1/air-freights");
    return response.data.data;
  },
  getAirFreight: async (air_freight_id: string) => {
    const response = await http.get<
      EximResponseWrapper<PaginationWrapper<AirFreight[]>>
    >("v1/air-freights", {
      params: {
        air_freight_id,
      },
    });
    return response.data.data;
  },
  createAirFreight: async (data: AirFreightBody) => {
    const response = await http.post("v1/air-freights", data);
    return response.data;
  },
  updateAirFreight: async (id: string, data: AirFreightBody) => {
    const response = await http.patch(`v1/air-freights/${id}`, data);
    return response.data;
  },
};
