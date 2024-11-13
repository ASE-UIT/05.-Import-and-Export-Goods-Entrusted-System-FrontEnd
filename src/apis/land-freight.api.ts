import { AllLandFreightType } from "@/schema/land-freight.schema";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

export const landFreightApi = {
  getAllLandFreight: async () => {
    try {
      const response = await http.get<AllLandFreightType>("v1/land-freights");
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
