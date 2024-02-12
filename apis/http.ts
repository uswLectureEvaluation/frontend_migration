/* eslint-disable no-param-reassign */
import axios, { AxiosInstance } from 'axios';

import { getAccessToken } from '@/utils/tokenManeger';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

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
    (error) => Promise.reject(error)
  );

  return instance;
};

const http = setInterceptor(axios.create({ baseURL: API_BASE_URL }));

export default http;
