import http from "@/utils/http";

const providerAction = {
  async getAllProvider() {
    const res = await http.get<EximResponseWrapper<ProviderType[]>>(
      "/v1/providers"
    );
    return res.data;
  },
  async createProvider(data: any) {
    const res = await http.post<EximResponseWrapper>(`/v1/providers`, data);
    return res.data;
  },
  async updateProvider(id: string, data: any) {
    const res = await http.patch<EximResponseWrapper>(
      `/v1/providers/${id}`,
      data
    );
    return res.data;
  },
};

export default providerAction;
