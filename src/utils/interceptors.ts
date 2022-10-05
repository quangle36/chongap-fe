import { getToken, storeToken } from './authUtils';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  console.log('config', config);
  const token = JSON.parse(getToken());
  if (config.headers) {
    config.headers['Authorization'] = `Bearer ${token.access_token}`;
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError<any>): Promise<AxiosError> => {
  if (error.response) {
    // Access Token was expired
    if (
      error.response.status === 401 &&
      error.response.data.message === 'jwt expired'
    ) {
      const storedToken = JSON.parse(getToken());

      try {
        const rs = await axios.post(`${BASE_URL}/v1/auth/refresh-token`, {
          refresh_token: storedToken.refresh_token,
        });

        const { token } = rs.data;

        storeToken(JSON.stringify(token));
        // localStorage.setItem('token', JSON.stringify(token));
        // localStorage.setItem('user', JSON.stringify(user));

        // return;
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
  }
  return Promise.reject(error);
};

export const setupInterceptorsTo = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
