import { ContractDetailsType } from "@/schema/contract.schema";
import {
    UpdateInvoiceType,
    CreateInvoiceType,
    InvoicesResType,
    InvoiceDetailsType,
  } from "@/schema/invoice.schema";
  import { ErrorType } from "@/types/error.type";
  import http from "@/utils/http";
  import axios from "axios";

  
  const invoiceAction = {
    async createInvoice(createInvoiceBody: CreateInvoiceType) {
      try {
        const response = await http.post("v1/invoices", createInvoiceBody);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const createInvoiceError = error.response.data as ErrorType;
          console.error("Error during create invoice:", createInvoiceError);
          throw createInvoiceError;
        } else {
          console.error("Unexpected error during create invoice:", error);
          throw error;
        }
      }
    },

    async getContractDetail() {
      try {
        const response = await http.get<ContractDetailsType>(
          "v1/invoices?status=PENDING"
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const getBookedQuotationsError = error.response.data as ErrorType;
          console.error("Error during get invoices:", getBookedQuotationsError);
          throw getBookedQuotationsError;
        } else {
          console.error("Unexpected error during get invoices:", error);
          throw error;
        }
      }
    },
      
    async getInvoice() {
      try {
        const response = await http.get<InvoicesResType>("v1/invoices");
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const getInvoiceError = error.response.data as ErrorType;
          console.error("Error during get invoice:", getInvoiceError);
          throw getInvoiceError;
        } else {
          console.error("Unexpected error during get invoice:", error);
          throw error;
        }
      }
    },
    async getInvoiceDetails(id: string | undefined) {
      try {
        const response = await http.get<InvoiceDetailsType>(
          "v1/invoices?id=${id}"
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const getInvoiceDetailsError = error.response.data as ErrorType;
          console.error(
            "Error during get invoice details:",
            getInvoiceDetailsError
          );
          throw getInvoiceDetailsError;
        } else {
          console.error("Unexpected error during get invoice details:", error);
          throw error;
        }
      }
    },
    async updateInvoice(
      id: string | undefined,
      updateInvoiceBody: Partial<UpdateInvoiceType>
    ) {
      try {
        const response = await http.patch(
          "v1/invoices/${id}",
          updateInvoiceBody
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const patchInvoiceError = error.response.data as ErrorType;
          console.error(
            "Error during update invoice details:",
            patchInvoiceError
          );
          throw patchInvoiceError;
        } else {
          console.error(
            "Unexpected error during update invoice details:",
            error
          );
          throw error;
        }
      }
    },
  };
  
  export default invoiceAction;