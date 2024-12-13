import { ContactRepBodyType } from "@/schema/contactRep.schema";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

const contactRepAction = {
  list: async (params: ContactRepQueryParams | null | undefined = null) => {
    try {
      const response = await http.get<
        EximResponseWrapper<PaginationWrapper<ContactRepResponse[]>>
      >("v1/contact-representatives", { params });

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

  details: async (id: string) => {
    try {
      const response = await http.get<
        EximResponseWrapper<PaginationWrapper<ContactRepResponse[]>>
      >(`v1/contact-representatives?id=${id}`);
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

  create: async (body: ContactRepBodyType) => {
    try {
      const response = await http.post(
        "v1/contact-representatives",
        body
      );
      return response.data as ContactRep;
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

  update: async (id: string, body: ContactRepBodyType) => {
    try {
      const response = await http.patch(
        `v1/contact-representatives/${id}`,
        body
      );
      return response.data;
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

export default contactRepAction;
