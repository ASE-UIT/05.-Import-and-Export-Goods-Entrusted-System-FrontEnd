import { FclBody } from "@/schema/fcl.schema";
import http from "@/utils/http";

export const fclApi = {
  getAllFcl: async () => {
    const response = await http.get<
      EximResponseWrapper<PaginationWrapper<FCL[]>>
    >("v1/fcls");
    return response.data.data;
  },
  getFcl: async (id: string) => {
    const response = await http.get<
      EximResponseWrapper<PaginationWrapper<FCL[]>>
    >("v1/fcls/", {
      params: {
        fcl_id: id,
      },
    });
    return response.data.data;
  },
  createFcl: async (data: FclBody) => {
    const response = await http.post("v1/fcls", data);
    return response.data;
  },
  updateFcl: async (id: string, data: FclBody) => {
    const response = await http.patch(`v1/fcls/${id}`, data);
    return response.data;
  },
};
