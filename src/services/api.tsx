import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from "axios";
import { getCookie } from "../lib/utils/storage";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL 
});

interface FailedRequest {
  resolve: (value: AxiosResponse) => void;
  reject: (value: AxiosError) => void;
  config: AxiosRequestConfig;
  error: AxiosError;
}

let failedRequest : FailedRequest[] = [];
let isTokenRefreshing = false;

api.interceptors.request.use(
  (config) => {
    const token = getCookie("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;