import http from "@/utils/http";
import {
  createProviderData,
  updateProviderData,
} from "@/schema/provider.schema";

const providerAction = {
  async getProvider(id?: string) {
    const res = await http.get<
      EximResponseWrapper<PaginationWrapper<ProviderType[]>>
    >("/v1/providers", {
      params: {
        id,
      },
    });
    return res.data.data;
  },
  async createProvider(data: createProviderData) {
    const res = await http.post<EximResponseWrapper>(`/v1/providers`, data);
    return res.data;
  },
  async updateProvider(id: string, data: updateProviderData) {
    const res = await http.patch<EximResponseWrapper>(
      `/v1/providers/${id}`,
      data
    );
    return res.data;
  },
};

export default providerAction;
