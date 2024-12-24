import { Document } from "@/types/document/document.type";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

const documentAction = {
  async getDocument(userId?: string, type?: string) {
    try {
      const res = await http.get<EximResponseWrapper<Document>>(
        "/v1/document",
        {
          params: {
            userId,
            type,
          },
        },
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const documentError = error.response.data as ErrorType;
        console.error("Error during get document:", documentError);
        throw documentError;
      } else {
        console.error("Unexpected error during get document:", error);
        throw error;
      }
    }
  },
};

export default documentAction;
