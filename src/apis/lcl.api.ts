import { LclBody } from "@/schema/lcl.schema";
import http from "@/utils/http";

export const lclApi = {
  getAllLcl: async () => {
    const response = await http.get<
      EximResponseWrapper<PaginationWrapper<LCL[]>>
    >("v1/lcls");
    return response.data.data;
  },
  getLcl: async (id: string) => {
    const response = await http.get<
      EximResponseWrapper<PaginationWrapper<LCL[]>>
    >("v1/lcls/", {
      params: {
        lcl_id: id,
      },
    });
    return response.data.data;
  },
  createLcl: async (data: LclBody) => {
    const response = await http.post("v1/lcls", data);
    return response.data;
  },
  updateLcl: async (id: string, data: LclBody) => {
    const response = await http.patch(`v1/lcls/${id}`, data);
    return response.data;
  },
};
