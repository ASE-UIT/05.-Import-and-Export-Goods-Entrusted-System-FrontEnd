import http from "@/utils/http";
import { importDocumentData } from "@/schema/document/importDocument.schema";

const importDocumentAction = {
  async getImportDocument(docNum?: number) {
    const res = await http.get<EximResponseWrapper<importDocumentData>>(
      "/v1/document",
      {
        params: {
          docNum,
        },
      },
    );
    return res.data;
  },
  async createImportDocument(data: any) {
    const res = await http.post<EximResponseWrapper>(`/v1/document`, data);
    return res.data;
  },
};

export default importDocumentAction;
