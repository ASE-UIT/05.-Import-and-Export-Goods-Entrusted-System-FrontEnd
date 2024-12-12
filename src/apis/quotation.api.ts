import {
  BookedQuoteRequestType,
  QuotationResType,
  CreateQuotationType,
  UpdateQuotationType,
  FreightDetailResType,
  EmployeeDetailResType,
} from "@/schema/quotation.schema";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

const quotationAction = {
  async createQuotation(createQuotationBody: CreateQuotationType) {
    try {
      const response = await http.post("v1/quotations", createQuotationBody);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const createQuotationError = error.response.data as ErrorType;
        console.error("Error during create quotation:", createQuotationError);
        throw createQuotationError;
      } else {
        console.error("Unexpected error during create quotation:", error);
        throw error;
      }
    }
  },
  async getQuotations() {
    try {
      const response = await http.get<QuotationResType>("v1/quotations");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const getQuotationError = error.response.data as ErrorType;
        console.error("Error during get quotation:", getQuotationError);
        throw getQuotationError;
      } else {
        console.error("Unexpected error during get quotation:", error);
        throw error;
      }
    }
  },
  async getBookedQuoteRequest() {
      try {
        const response = await http.get<BookedQuoteRequestType>(
          "v1/quotation-requests?"
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const getBookedQuoteRequestError = error.response.data as ErrorType;
          console.error("Error during get quotations:", getBookedQuoteRequestError);
          throw getBookedQuoteRequestError;
        } else {
          console.error("Unexpected error during get quotations:", error);
          throw error;
        }
      }
  },
  async getQuotationDetails(id: string | undefined) {
      try {
        const response = await http.get<QuotationResType>(
          `v1/quotations?id=${id}`
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const getQuotationDetailsError = error.response.data as ErrorType;
          console.error(
            "Error during get quotation details:",
            getQuotationDetailsError
          );
          throw getQuotationDetailsError;
        } else {
          console.error("Unexpected error during get quotation details:", error);
          throw error;
        }
      }
  },
  async getFreight() {
    try {
      const response = await http.get<FreightDetailResType>(
        "v1/freights"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const getFreightError = error.response.data as ErrorType;
        console.error("Error during get quotations:", getFreightError);
        throw getFreightError;
      } else {
        console.error("Unexpected error during get quotations:", error);
        throw error;
      }
    }
},

async getEmployee() {
  try {
    const response = await http.get<EmployeeDetailResType>(
      "v1/employees"
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const getEmployeeError = error.response.data as ErrorType;
      console.error("Error during get quotations:", getEmployeeError);
      throw getEmployeeError;
    } else {
      console.error("Unexpected error during get quotations:", error);
      throw error;
    }
  }
},

  async updateQuotation(
      id: string | undefined,
      updateQuotationBody: Partial<UpdateQuotationType>
    ) {
      try {
        const response = await http.patch(
          `v1/quotations/${id}`,
          updateQuotationBody
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const patchQuotationError = error.response.data as ErrorType;
          console.error(
            "Error during update quotation details:",
            patchQuotationError
          );
          throw patchQuotationError;
        } else {
          console.error(
            "Unexpected error during update quotation details:",
            error
          );
          throw error;
        }
      }
  },
};

export default quotationAction;