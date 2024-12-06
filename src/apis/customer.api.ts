import { ErrorType } from '@/types/error.type';
import http from '@/utils/http';
import axios from 'axios';

const customerAction = {
  list: async (params: CustomerQueryParams | null | undefined = null) => {
    try {
      console.log(params);
      const response = await http.get<
        EximResponseWrapper<PaginationWrapper<CustomerResponse[]>>
      >('/v1/customers', { params });
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const authError = error.response.data as ErrorType;
        console.error('Error during login:', authError);
        throw authError;
      } else {
        console.error('Unexpected error during login:', error);
        throw error;
      }
    }
  },

  create: async (body: CreateCustomerBody) => {
    try {
      const response = await http.post<EximResponseWrapper<CustomerResponse>>(
        '/v1/customers',
        body
      );
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const authError = error.response.data as ErrorType;
        console.error('Error during login:', authError);
        throw authError;
      } else {
        console.error('Unexpected error during login:', error);
        throw error;
      }
    }
  },

  update: async (id: string, body: UpdateCustomerBody) => {
    try {
      const response = await http.patch<EximResponseWrapper<CustomerResponse>>(
        `/v1/customers/${id}`,
        body
      );
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        const authError = error.response.data as ErrorType;
        console.error('Error during login:', authError);
        throw authError;
      } else {
        console.error('Unexpected error during login:', error);
        throw error;
      }
    }
  },
};

export default customerAction;
