import {
  CreateAirFreightBody,
  UpdateAirFreightBody,
} from "@/schema/air-freight.schema";
import http from "@/utils/http";

export const airFreightApi = {
  getAllAirFreight: async () => {
    const response = await http.get<EximResponseWrapper<AirFreight[]>>(
      "v1/air-freights"
    );
    return response.data;
  },
  getAirFreight: async (id: string) => {
    const response = await http.get<EximResponseWrapper<AirFreight>>(
      "v1/air-freights/",
      {
        params: {
          id,
        },
      }
    );
    return response.data;
  },
  createAirFreight: async (data: CreateAirFreightBody) => {
    const response = await http.post("v1/air-freights", data);
    return response.data;
  },
  updateAirFreight: async (id: string, data: UpdateAirFreightBody) => {
    const response = await http.patch(`v1/air-freights/${id}`, data);
    return response.data;
  },
};
