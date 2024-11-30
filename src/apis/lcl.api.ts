import { CreateLclBody, UpdateLclBody } from "@/schema/lcl.schema";
import http from "@/utils/http";

export const lclApi = {
  getAllLcl: async () => {
    const response = await http.get<EximResponseWrapper<LCL[]>>("v1/lcls");
    return response.data;
  },
  getLcl: async (id: string) => {
    const response = await http.get<EximResponseWrapper<LCL>>("v1/lcls/", {
      params: {
        id,
      },
    });
    return response.data;
  },
  createLcl: async (data: CreateLclBody) => {
    const response = await http.post("v1/lcls", data);
    return response.data;
  },
  updateLcl: async (id: string, data: UpdateLclBody) => {
    const response = await http.patch(`v1/lcls/${id}`, data);
    return response.data;
  },
};
