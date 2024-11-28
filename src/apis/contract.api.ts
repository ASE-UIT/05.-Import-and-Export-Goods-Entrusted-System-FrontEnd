import {
  BookedQuotationsType,
  ContractDetailsType,
  ContractsResType,
  CreateContractBody,
  CreateContractType,
  UpdateContractType,
} from "@/schema/contract.schema";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

const contractAction = {
  async createContract(createContractBody: CreateContractType) {
    try {
      const response = await http.post("v1/contracts", createContractBody);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const createContractError = error.response.data as ErrorType;
        console.error("Error during create contract:", createContractError);
        throw createContractError;
      } else {
        console.error("Unexpected error during create contract:", error);
        throw error;
      }
    }
  },
  async getContracts() {
    try {
      const response = await http.get<ContractsResType>("v1/contracts");
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
  async getBookedQuotations() {
    try {
      const response = await http.get<BookedQuotationsType>(
        "v1/quotations?status=BOOKED"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const getBookedQuotationsError = error.response.data as ErrorType;
        console.error("Error during get contracts:", getBookedQuotationsError);
        throw getBookedQuotationsError;
      } else {
        console.error("Unexpected error during get contracts:", error);
        throw error;
      }
    }
  },
  async getContractDetails(id: string | undefined) {
    try {
      const response = await http.get<ContractsResType>(
        `v1/contracts?id=${id}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const getContractDetailsError = error.response.data as ErrorType;
        console.error(
          "Error during get contract details:",
          getContractDetailsError
        );
        throw getContractDetailsError;
      } else {
        console.error("Unexpected error during get contract details:", error);
        throw error;
      }
    }
  },
  async updateContract(
    id: string | undefined,
    updateContractBody: Partial<UpdateContractType>
  ) {
    try {
      const response = await http.patch(
        `v1/contracts/${id}`,
        updateContractBody
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const patchContractsError = error.response.data as ErrorType;
        console.error(
          "Error during update contract details:",
          patchContractsError
        );
        throw patchContractsError;
      } else {
        console.error(
          "Unexpected error during update contract details:",
          error
        );
        throw error;
      }
    }
  },
};

export default contractAction;
