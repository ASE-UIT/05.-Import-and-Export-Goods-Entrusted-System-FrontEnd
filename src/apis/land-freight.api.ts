import {
  CreateLandFreightBody,
  UpdateLandFreightBody,
} from "@/schema/land-freight.schema";
import http from "@/utils/http";

export const landFreightApi = {
  getAllLandFreight: async () => {
    const response = await http.get<EximResponseWrapper<LandFreight[]>>(
      "v1/land-freights"
    );
    return response.data;
  },
  getLandFreight: async (id: string) => {
    const response = await http.get<EximResponseWrapper<LandFreight>>(
      "v1/land-freights/",
      {
        params: {
          id,
        },
      }
    );
    return response.data;
  },
  createLandFreight: async (data: CreateLandFreightBody) => {
    const response = await http.post("v1/land-freights", data);
    return response.data;
  },
  updateLandFreight: async (id: string, data: UpdateLandFreightBody) => {
    const response = await http.patch(`v1/land-freights/${id}`, data);
    return response.data;
  },
};
