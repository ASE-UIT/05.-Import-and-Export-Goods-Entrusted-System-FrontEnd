import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

const contractAction = {
  async createContract() {},
  async getContracts() {
    try {
      const response = await http.get("v1/contracts");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const getContractsError = error.response.data as ErrorType;
        console.error("Error during get contracts:", getContractsError);
        throw getContractsError;
      } else {
        console.error("Unexpected error during get contracts:", error);
        throw error;
      }
    }
  },
};

export default contractAction;
