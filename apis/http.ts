/* eslint-disable no-param-reassign */
import axios, { AxiosInstance } from 'axios';

import API_URLS from '@/constants/apiUrls';
import { REFRESH_KEY, TOKEN_KEY } from '@/constants/auth';
import {
  getAccessToken,
  getRefreshToken,
  setToken,
} from '@/utils/tokenManeger';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const TOKEN_EXPIRED = 401;

const setInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  instance.interceptors.response.use(
    (response) => response.data,
    async (error) => {
      if (error.response.status === TOKEN_EXPIRED) {
        const originalRequest = error.config;
        const refresh = await axios.post(
          `${API_BASE_URL}${API_URLS.USER.REFRESH}`,
          null,
          {
            headers: {
              Authorization: getRefreshToken(),
            },
          }
        );
        const newAccessToken = refresh.data.AccessToken;
        const newRefreshToken = refresh.data.RefreshToken;
        originalRequest.headers.Authorization = newAccessToken;

        setToken(TOKEN_KEY, newAccessToken);
        setToken(REFRESH_KEY, newRefreshToken);

        return http(originalRequest);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const http = setInterceptor(axios.create({ baseURL: API_BASE_URL }));

export default http;
