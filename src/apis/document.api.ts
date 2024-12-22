import { CreateDocumentType } from "@/schema/document.schema";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

const documentAction = {
createDocument: async (documentCreateType: CreateDocumentType) => {
 try {
      const response = await http.post(
        `v1/document`,
        documentCreateType
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const postError = error.response.data as ErrorType;
        console.error("Error during update quote request:", postError);
        throw postError;
      } else {
        console.error("Unexpected error during post:", error);
        throw error;
      }
    }
  }, 
}
export default documentAction;
