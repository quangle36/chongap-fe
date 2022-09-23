import { getJwt } from './authUtils';
import axios from 'axios';

const getDefaultConfig = () => {
  const jwt = getJwt();
  const authorizationHeader = jwt ? { Authorization: `Bearer ${jwt}` } : {};
  return {
    baseURL: process.env.API_ENDPOINT,
    headers: {
      'Content-Type': 'application/json',
      ...authorizationHeader,
    },
    params: {},
    data: {},
  };
};

function get(url: string, params = {}, config = {}) {
  return executeRequest(url, { ...config, params });
}

function patch(url: string, data = {}, config = {}) {
  return executeRequest(url, {
    method: 'PATCH',
    data,
    ...config,
  });
}

function post(url: string, data = {}, params = {}, config = {}) {
  return executeRequest(url, {
    method: 'POST',
    data,
    params,
    ...config,
  });
}

function del(url: string, params = {}, config = {}) {
  return executeRequest(url, {
    method: 'DELETE',
    params,
    ...config,
  });
}

function put(url: string, data = {}, params = {}, config = {}) {
  return executeRequest(url, {
    method: 'PUT',
    data,
    params,
    ...config,
  });
}

async function executeRequest(url: string, config: any) {
  const finalConfig = { ...getDefaultConfig(), ...config, url };
  return axios.request(finalConfig).then((response) => response);
}

export default { get, post, patch, put, del };
