import API_URLS from '@/constants/apiUrls';
import { UserLoginFormValues, UserLoginResponse } from '@/interfaces/user';

import http from './http';

/* eslint-disable import/prefer-default-export */
export const login = async (formData: UserLoginFormValues) => {
  const response: UserLoginResponse = await http.post(
    API_URLS.USER.LOGIN,
    formData
  );
  return response;
};
