import http from "@/utils/http";
import { ExportCustomsDeclaration } from "@/types/document/export-customs-declaration.type";
import { exportCustomsDeclarationData } from "@/schema/document/export-customs-declaration.schema";

const exportCusDecAction = {
  async getExportDocument(docNum?: number, shipmentId?: string, type?: string) {
    const res = await http.get<EximResponseWrapper<ExportCustomsDeclaration>>(
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
  async createExportDocument(data: exportCustomsDeclarationData) {
    const res = await http.post<EximResponseWrapper>(`/v1/document`, data);
    return res.data;
  },

  async detail(id: string) {
    const res = await http.get<EximResponseWrapper<ExportCustomsDeclaration>>(
      `/v1/document/${id}`,
    );
    return res.data;
  },
};

export default exportCusDecAction;
