import { CreateFclBody, UpdateFclBody } from "@/schema/fcl.schema";
import http from "@/utils/http";

export const fclApi = {
  getAllFcl: async () => {
    const response = await http.get<EximResponseWrapper<FCL[]>>("v1/fcls");
    return response.data;
  },
  getFcl: async (id: string) => {
    const response = await http.get<EximResponseWrapper<FCL>>("v1/fcls/", {
      params: {
        id,
      },
    });
    return response.data;
  },
  createFcl: async (data: CreateFclBody) => {
    const response = await http.post("v1/fcls", data);
    return response.data;
  },
  updateFcl: async (id: string, data: UpdateFclBody) => {
    const response = await http.patch(`v1/fcls/${id}`, data);
    return response.data;
  },
};
