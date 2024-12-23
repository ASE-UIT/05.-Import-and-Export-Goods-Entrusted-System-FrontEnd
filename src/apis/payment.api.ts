import {
    CreatePaymentType,
    PaymentsResType,
    PaymentDetailsType,
  } from "@/schema/payment.schema";
  import { ErrorType } from "@/types/error.type";
  import http from "@/utils/http";
  import axios from "axios";

  
  const paymentAction = {
    async createPayment(createPaymentBody: CreatePaymentType) {
      try {
        const response = await http.post("v1/payments", createPaymentBody);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const createPaymentError = error.response.data as ErrorType;
          console.error("Error during create payment:", createPaymentError);
          throw createPaymentError;
        } else {
          console.error("Unexpected error during create payment:", error);
          throw error;
        }
      }
    }, 
      
    async getPayment() {
      try {
        const response = await http.get<PaymentsResType>("v1/payments");
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const getPaymentError = error.response.data as ErrorType;
          console.error("Error during get payment:", getPaymentError);
          throw getPaymentError;
        } else {
          console.error("Unexpected error during get payment:", error);
          throw error;
        }
      }
    },
    async getPaymentDetails(id: string | undefined) {
      try {
        const response = await http.get<PaymentDetailsType>(
          `v1/payments?id=${id}`
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
          const getPaymentDetailsError = error.response.data as ErrorType;
          console.error(
            "Error during get payment details:",
            getPaymentDetailsError
          );
          throw getPaymentDetailsError;
        } else {
          console.error("Unexpected error during get payment details:", error);
          throw error;
        }
      }
    },
  };
  
  export default paymentAction;