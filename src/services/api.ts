import axios from 'axios';
import { API_URL } from '../config';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Intercept all requests and add the token to the Authorization header
api.interceptors.request.use(
    (config) => {
    //   const token = TokenService.getLocalAccessToken();
    //   if (token) {
    //     config.headers["x-access-token"] = token; // for Node.js Express back-end
    //   }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default api;