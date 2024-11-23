import { AuthResType, LoginBodyType } from "@/schema/auth.schema";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

const authAction = {
  login: async (loginDetails: LoginBodyType) => {
    try {
      const response = await http.post("v1/session", loginDetails);
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

  getSession: async () => {
    try {
      const response = await http.get<AuthResType>("v1/session");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const authError = error.response.data as ErrorType;
        console.error("Error during get session:", authError);
        throw authError;
      } else {
        console.error("Unexpected error during get session:", error);
        throw error;
      }
    }
  },

  logout: async () => {
    try {
      const response = await http.delete("v1/session");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const authError = error.response.data as ErrorType;
        console.error("Error during logout:", authError);
        throw authError;
      } else {
        console.error("Unexpected error during logout:", error);
        throw error;
      }
    }
  },
};

export default authAction;
