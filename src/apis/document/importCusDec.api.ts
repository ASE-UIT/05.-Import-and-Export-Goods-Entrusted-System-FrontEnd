import http from "@/utils/http";
import { importDocumentData } from "@/schema/document/importDocument.schema";
import { ImportCustomsDeclaration } from "@/types/document/import-customs-declaration.type";

const importCusDecAction = {
  async getImportDocument(docNum?: number, shipmentId?: string) {
    const res = await http.get<EximResponseWrapper<ImportCustomsDeclaration>>(
      "/v1/document",
      {
        params: {
          docNum,
          shipmentId,
        },
      },
    );
    return res.data;
  },
  async createImportDocument(data: any) {
    const res = await http.post<EximResponseWrapper>(`/v1/document`, data);
    return res.data;
  },

  async detail (id: string) {
    const res = await http.get<EximResponseWrapper<ImportCustomsDeclaration>>(
      `/v1/document/${id}`,
    );
    return res.data;
  }
};

export default importCusDecAction;
