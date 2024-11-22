import http from "@/utils/http";

const contactRepAction = {
  async getContactRep(page?: number, limit?: number) {
    const res = await http.get<EximResponseWrapper<ContractRepType[]>>(
      "v1/contact-representatives"
    );
    return res.data;
  },
  async createContactRep(data: any) {
    const res = await http.post<EximResponseWrapper>(
      `v1/contact-representatives`,
      data
    );
    return res.data;
  },
  async updateContactRep(id: string, data: any) {
    const res = await http.patch<EximResponseWrapper>(
      `v1/contact-representatives/${id}`,
      data
    );
    return res.data;
  },
};

export default contactRepAction;
