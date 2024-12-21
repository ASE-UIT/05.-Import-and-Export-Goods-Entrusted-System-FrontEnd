import { FreightBody } from "@/schema/freight.schema";
import http from "@/utils/http";

export const freightApi = {
  getAllFreight: async () => {
    const response = await http.get<
      EximResponseWrapper<PaginationWrapper<Freight[]>>
    >("v1/freights");
    return response.data.data;
  },
  getFreight: async (id: string) => {
    const response = await http.get<
      EximResponseWrapper<PaginationWrapper<Freight[]>>
    >("v1/freights/", {
      params: {
        id,
      },
    });
    return response.data.data;
  },
  createFreight: async (data: FreightBody) => {
    const response = await http.post("v1/freights", data);
    return response.data;
  },
  updateFreight: async (id: string, data: FreightBody) => {
    const response = await http.patch(`v1/freights/${id}`, data);
    return response.data;
  },
};
