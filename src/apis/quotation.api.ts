import {
    BookedQuoteRequestType,
    QuotationResType,
    CreateQuotationType,
    UpdateQuotationType,
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
            const getQuotationsError = error.response.data as ErrorType;
            console.error("Error during get quotations:", getQuotationsError);
            throw getQuotationsError;
          } else {
              console.error("Unexpected error during get quotations:", error);
              throw error;
          }
        }
    },
    async getBookedQuoteRequest() {
        try {
          const response = await http.get<BookedQuoteRequestType>(
            "v1/quotation-requests?status=BOOKED"
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