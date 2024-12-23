import {
  CreateServiceBodyType,
  UpdateServiceBodyType,
} from "@/schema/service.schema";
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
      const response = await http.get<Service[]>(`v1/services`, { params });
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

  createService: async (service: CreateServiceBodyType) => {
    try {
      const response = await http.post(`v1/services`, service);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const serviceError = error.response.data as ErrorType;
        console.error("Error during service creation:", serviceError);
        throw serviceError;
      } else {
        console.error("Unexpected error during service creation:", error);
        throw error;
      }
    }
  },

  updateService: async (id: string, service: UpdateServiceBodyType) => {
    try {
      const response = await http.patch(`v1/services/${id}`, service);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const serviceError = error.response.data as ErrorType;
        console.error("Error during service update:", serviceError);
        throw serviceError;
      } else {
        console.error("Unexpected error during service update:", error);
        throw error;
      }
    }
  },
};

export default serviceAction;
