import axios, {
  AxiosInstance,
  // AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

const BACKEND_URL = 'http://localhost:3001';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    // (response: AxiosResponse) => response,
    (response: AxiosResponse) => {
      return response;
    },

    (error: AxiosError) => {
      const { response } = error;

      return Promise.reject(error);
    },
  );

  return api;
};
