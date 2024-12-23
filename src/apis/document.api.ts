import http from "@/utils/http";
import { get } from "http";

const documentAction = {
  async getDocument(shipmentId?: string, type?: string) {
    const res = await http.get("/v1/document", {
      params: {
        shipmentId,
        type,
      },
    });
    return res.data;
  },
  async createDocument(data: any) {
    const res = await http.post("/v1/document", data);
    return res.data;
  },
  async updateDocument(shipmentId: string, data: any) {
    const res = await http.patch(`/v1/document/${shipmentId}`, data);
    return res.data;
  },
  async getDocumentById(id: string) {
    const res = await http.get(`/v1/document/${id}`);
    return res.data;
  },
};
export default documentAction;
