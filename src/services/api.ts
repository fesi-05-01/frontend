import axios, { isAxiosError } from 'axios';

const API_URL = 'https://fe-adv-project-together-dallaem.vercel.app/fesi0501';

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use((config) => {
  if (typeof window === undefined) return config;

  /**
   * 토큰 발급 후에 어디에 저장할지 결정 하고나서 로직 추가하시면 됩니다.
   *
   * 보통 Nextjs에서는 쿠키에 저장하는게 일반적입니다. 쿠키 라이브러리도 추가하는게 좋을듯!
   *
   * 현재는 임시로 넣어둠
   */
  const accessToken = 'string';

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
