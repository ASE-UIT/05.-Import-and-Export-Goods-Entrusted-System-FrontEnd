import http from "@/utils/http";
import { importDocumentData } from "@/schema/document/importDocument.schema";
import { ImportCustomsDeclaration } from "@/types/document/import-customs-declaration.type";
import { importCustomsDeclarationData } from "@/schema/document/import-customs-declaration.schema";

const importCusDecAction = {
  async getImportDocument(docNum?: number, shipmentId?: string, type?: string) {
    const res = await http.get<EximResponseWrapper<ImportCustomsDeclaration>>(
      "/v1/document",
      {
        params: {
          docNum,
          shipmentId,
          type,
        },
      },
    );
    return res.data;
  },
  async createImportDocument(data: importCustomsDeclarationData) {
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