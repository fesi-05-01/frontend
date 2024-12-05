import axios, { isAxiosError } from 'axios';
import Cookie from 'js-cookie';

export const API_URL =
  'https://fe-adv-project-together-dallaem.vercel.app/fesi0501';

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use((config) => {
  if (typeof window === 'undefined') return config;

  const accessToken = Cookie.get('accessToken');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => {
    if (200 <= response.status && response.status < 300) {
      return response;
    }

    return Promise.reject(response);
  },
  (error) => {
    if (!isAxiosError(error) || !error.response) return Promise.reject(error);

    return Promise.reject(error.response);
  },
);

export const get = async <T>(...args: Parameters<typeof instance.get>) => {
  const response = await instance.get<T>(...args);
  return response.data;
};

export const post = async <T>(...args: Parameters<typeof instance.post>) => {
  const response = await instance.post<T>(...args);
  return response.data;
};

export const put = async <T>(...args: Parameters<typeof instance.put>) => {
  const response = await instance.put<T>(...args);
  return response.data;
};

export const del = async <T>(...args: Parameters<typeof instance.delete>) => {
  const response = await instance.delete<T>(...args);
  return response.data;
};
