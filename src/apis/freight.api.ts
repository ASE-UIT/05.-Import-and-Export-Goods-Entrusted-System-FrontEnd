import { AllFreightType, FreightType } from "@/schema/freight.schema";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

export const freightApi = {
  getAllFreight: async () => {
    try {
      const response = await http.get<AllFreightType>("v1/freights");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const getError = error.response.data as ErrorType;
        console.error("Error:", getError);
        throw getError;
      } else {
        console.error("Unexpected error:", error);
        throw error;
      }
    }
  },
  createFreight: async (data: FreightType) => {
    try {
      const response = await http.post("v1/freights", data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const getError = error.response.data as ErrorType;
        console.error("Error:", getError);
        throw getError;
      } else {
        console.error("Unexpected error:", error);
        throw error;
      }
    }
  },
};
