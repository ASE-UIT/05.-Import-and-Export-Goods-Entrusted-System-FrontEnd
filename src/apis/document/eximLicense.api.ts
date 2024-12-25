import { CreateEximDocumentType, GetEximDocumentByIdType } from "@/schema/document/im_ex-license.schema";
import { CreateDocumentType, GetPackingListDocumentByIdType } from "@/schema/document/packinglist.schema";
import { ErrorType } from "@/types/error.type";
import http from "@/utils/http";
import axios from "axios";

const eximAction = {
createDocument: async (documentCreateType: CreateEximDocumentType) => {
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
  getDocumentById: async (id: string) => {
 try {
 
     const response = await http.get<EximResponseWrapper<GetEximDocumentByIdType []>>(
        `v1/document/${id}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const getError = error.response.data as ErrorType;
        console.error("Error during get document:", getError);
        throw getError;
      } else {
        console.error("Unexpected error during get:", error);
        throw error;
      }
    }
  }, 
}
export default eximAction;
