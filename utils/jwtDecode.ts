import { refresh } from '@/apis/user';
import { REFRESH_KEY, TOKEN_KEY } from '@/constants/auth';

import { setToken } from './tokenManeger';

export const jwtDecode = (token: string) => {
  const base64Payload = token.split('.')[1];
  const payload = Buffer.from(base64Payload, 'base64');
  const result = JSON.parse(payload.toString());

  return result;
};

export const checkTokenExpiration = (token: string) => {
  const decodedToken = jwtDecode(token);
  return decodedToken.exp < Date.now() / 1000;
};

export const tokenRefresh = async (token: string) => {
  const response = await refresh(token);
  setToken(TOKEN_KEY, response.AccessToken);
  setToken(REFRESH_KEY, response.RefreshToken);
  console.log('Token Refreshed');
  return response;
};
