import axios, { AxiosInstance, AxiosError } from 'axios';
import nullEmptyString from './nullEmptyString';

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.entrustexim.com',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    this.instance.interceptors.request.use((request) => {
      const queryParams = request.params;
      // null all params having empty string in value
      request.params = nullEmptyString(queryParams);
      return request;
    });

    this.instance.interceptors.request.use((request) => {
      const queryParams = request.params;
      // null all params having empty string in value
      request.params = nullEmptyString(queryParams);
      return request;
    });

    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response?.data) {
          console.error('HTTP error:', error.response.data);
        } else {
          console.error('Unexpected HTTP error:', error);
        }
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;

export default http;
