import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

const legalRepAction = {
  list: async (params: LegalRepQueryParams | null | undefined = null) => {
    try {
      const response = await http.get<
        EximResponseWrapper<PaginationWrapper<LegalRepResponse[]>>
      >("/v1/legal-reps", { params });
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const authError = error.response.data as ErrorType;
        console.error("Error during login:", authError);
        throw authError;
      } else {
        console.error("Unexpected error during login:", error);
        throw error;
      }
    }
  },

  detail: async (id: string) => {
    try {
      const response = await http.get<EximResponseWrapper<LegalRepResponse>>(
        `/v1/legal-reps/${id}`
      );
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const authError = error.response.data as ErrorType;
        console.error("Error during login:", authError);
        throw authError;
      } else {
        console.error("Unexpected error during login:", error);
        throw error;
      }
    }
  },

  create: async (body: CreateLegalRepBody) => {
    try {
      const response = await http.post<EximResponseWrapper<LegalRepResponse>>(
        "/v1/legal-reps",
        body
      );
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const authError = error.response.data as ErrorType;
        console.error("Error during login:", authError);
        throw authError;
      } else {
        console.error("Unexpected error during login:", error);
        throw error;
      }
    }
  },

  update: async (id: string, body: UpdateLegalRepBody) => {
    try {
      const response = await http.patch<EximResponseWrapper<LegalRepResponse>>(
        `/v1/legal-reps/${id}`,
        body
      );
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const authError = error.response.data as ErrorType;
        console.error("Error during login:", authError);
        throw authError;
      } else {
        console.error("Unexpected error during login:", error);
        throw error;
      }
    }
  },
};

export default legalRepAction;
