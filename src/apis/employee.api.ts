import {
  CreateEmployeeBodyType,
  UpdateEmployeeBodyType,
} from "@/schema/employee.schema";
import { EmployeeResType } from "@/types/employee.type";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";
import { create } from "domain";

const employeeAction = {
  list: async () => {
    try {
      const response = await http.get<EximResponseWrapper<EmployeeResType[]>>(
        "v1/employees"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const employeeError = error.response.data as ErrorType;
        console.error("Error during list employee:", employeeError);
        throw employeeError;
      } else {
        console.error("Unexpected error during list employee:", error);
        throw error;
      }
    }
  },

  create: async (employeeDetails: CreateEmployeeBodyType) => {
    try {
      const response = await http.post("v1/employees", employeeDetails);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const employeeError = error.response.data as ErrorType;
        console.error("Error during create employee:", employeeError);
        throw employeeError;
      } else {
        console.error("Unexpected error during create employee:", error);
        throw error;
      }
    }
  },

  detail: async (id: string) => {
    try {
      const response = await http.get<EximResponseWrapper<EmployeeResType>>(
        `v1/employees/${id}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const employeeError = error.response.data as ErrorType;
        console.error("Error during detail employee:", employeeError);
        throw employeeError;
      } else {
        console.error("Unexpected error during detail employee:", error);
        throw error;
      }
    }
  },

  update: async (id: string, employeeDetails: UpdateEmployeeBodyType) => {
    try {
      const response = await http.patch(`v1/employees/${id}`, employeeDetails);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const employeeError = error.response.data as ErrorType;
        console.error("Error during update employee:", employeeError);
        throw employeeError;
      } else {
        console.error("Unexpected error during update employee:", error);
        throw error;
      }
    }
  },
};

export default employeeAction;
