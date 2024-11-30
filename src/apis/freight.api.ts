import { CreateFreightBody, UpdateFreightBody } from "@/schema/freight.schema";
import http from "@/utils/http";
import { get } from "http";

export const freightApi = {
  getAllFreight: async () => {
    const response = await http.get<EximResponseWrapper<Freight[]>>(
      "v1/freights"
    );
    return response.data;
  },
  getFreight: async (id: string) => {
    const response = await http.get<EximResponseWrapper<Freight>>(
      "v1/freights/",
      {
        params: {
          id,
        },
      }
    );
    return response.data;
  },
  createFreight: async (data: CreateFreightBody) => {
    const response = await http.post("v1/freights", data);
    return response.data;
  },
  updateFreight: async (id: string, data: UpdateFreightBody) => {
    const response = await http.patch(`v1/freights/${id}`, data);
    return response.data;
  },
};
