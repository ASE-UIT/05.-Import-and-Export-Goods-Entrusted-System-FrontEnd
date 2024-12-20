import { ErrorType } from "@/types/error.type";
import { Service } from "@/types/service.type";
import http from "@/utils/http";
import axios from "axios";

const serviceAction = {
  getService: async (shortName?: string, name?: string) => {
    try {
      const params = {
        shortName,
        name,
      };

      const response = await http.get<Service[]>(`v1/service`, { params });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const serviceError = error.response.data as ErrorType;
        console.error("Error during service:", serviceError);
        throw serviceError;
      } else {
        console.error("Unexpected error during service:", error);
        throw error;
      }
    }
  },
};

export default serviceAction;
