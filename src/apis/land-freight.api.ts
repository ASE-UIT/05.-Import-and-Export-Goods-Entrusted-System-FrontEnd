import { LandFreightBody } from "@/schema/land-freight.schema";
import http from "@/utils/http";

export const landFreightApi = {
  getAllLandFreight: async () => {
    const response = await http.get<
      EximResponseWrapper<PaginationWrapper<LandFreight[]>>
    >("v1/land-freights");
    return response.data.data;
  },
  getLandFreight: async (id: string) => {
    const response = await http.get<
      EximResponseWrapper<PaginationWrapper<LandFreight[]>>
    >("v1/land-freights/", {
      params: {
        land_freight_id: id,
      },
    });
    return response.data.data;
  },
  createLandFreight: async (data: LandFreightBody) => {
    const response = await http.post("v1/land-freights", data);
    return response.data;
  },
  updateLandFreight: async (id: string, data: LandFreightBody) => {
    const response = await http.patch(`v1/land-freights/${id}`, data);
    return response.data;
  },
};
