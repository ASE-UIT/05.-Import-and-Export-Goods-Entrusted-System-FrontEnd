import {
  CreateUsersBodyType,
  UpdatePasswordBodyType,
  UserResponseType,
} from "@/schema/user.schema";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

const userAction = {
  list: async () => {
    try {
      const response = await http.get<EximResponseWrapper<UserResponseType[]>>(
        "v1/users"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const userError = error.response.data as ErrorType;
        console.error("Error during list user:", userError);
        throw userError;
      } else {
        console.error("Unexpected error during list user:", error);
        throw error;
      }
    }
  },

  create: async (userDetails: CreateUsersBodyType) => {
    try {
      const response = await http.post("v1/users", userDetails);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const userError = error.response.data as ErrorType;
        console.error("Error during create user:", userError);
        throw userError;
      } else {
        console.error("Unexpected error during create user:", error);
        throw error;
      }
    }
  },

  updatePassword: async (
    userId: string,
    updatePasswordDetails: UpdatePasswordBodyType
  ) => {
    try {
      const response = await http.patch(
        `v1/users/${userId}/password`,
        updatePasswordDetails
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const userError = error.response.data as ErrorType;
        console.error("Error during update password:", userError);
        throw userError;
      } else {
        console.error("Unexpected error during update password:", error);
        throw error;
      }
    }
  },
};

export default userAction;
