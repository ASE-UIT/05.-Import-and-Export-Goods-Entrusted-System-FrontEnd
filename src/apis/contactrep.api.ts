import http from "@/utils/http";
import {
  createContactRepData,
  updateContactRepData,
} from "@/schema/contactRep.schema";

const contactRepAction = {
  async getContactRep(id?: string) {
    const res = await http.get<EximResponseWrapper<ContractRepType[]>>(
      "v1/contact-representatives",
      {
        params: {
          id,
        },
      }
    );
    return res.data;
  },
  async createContactRep(data: createContactRepData) {
    const res = await http.post<EximResponseWrapper>(
      `v1/contact-representatives`,
      data
    );
    return res.data;
  },
  async updateContactRep(id: string, data: updateContactRepData) {
    const res = await http.patch<EximResponseWrapper>(
      `v1/contact-representatives/${id}`,
      data
    );
    return res.data;
  },
};

export default contactRepAction;
