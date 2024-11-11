import { CreateQuoteRequestType, GetQuoteRequestDetailsType, GetQuoteRequestType } from "@/schema/quote-request.schema";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";


const quoteRequestAction = {
  createQuoteRequest : async(quoteRequestCreate : CreateQuoteRequestType) =>{
    try {
        const response = await http.post("v1/quotation-requests", quoteRequestCreate);
        return response.data;
        } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
            const postError = error.response.data as ErrorType;
            console.error("Error during create:", postError);
            throw postError;
        } else {
            console.error("Unexpected error during post:", error);
            throw error;
        }
    }
  },
  getQuoteRequest : async() =>{
    try {
        const response = await http.get<GetQuoteRequestType>("v1/quotation-requests");
        return response.data;
        } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
            const getError = error.response.data as ErrorType;
            console.error("Error during get quote requests:", getError);
            throw getError;
        } else {
            console.error("Unexpected error during get:", error);
            throw error;
        }
    }
  },
  getQuoteRequestDetails : async(quoteReqId: string) =>{
    try {
        const response = await http.get<GetQuoteRequestDetailsType>("v1/quote-request-details?quoteReqId="+ quoteReqId);
        return response.data;
        } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data) {
            const getError = error.response.data as ErrorType;
            console.error("Error during get quote requests:", getError);
            throw getError;
        } else {
            console.error("Unexpected error during get:", error);
            throw error;
        }
    }
  }
}

export default quoteRequestAction ;