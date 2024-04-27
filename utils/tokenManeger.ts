import { Cookies } from 'react-cookie';

import { REFRESH_KEY, TOKEN_KEY } from '@/constants/auth';

const cookies = new Cookies();

export const setToken = (
  key: typeof TOKEN_KEY | typeof REFRESH_KEY,
  token: string
) => {
  cookies.set(key, token, {
    path: '/',
  });
};

export const removeToken = (key: typeof TOKEN_KEY | typeof REFRESH_KEY) => {
  cookies.remove(key, { path: '/' });
};

export const removeTokenAll = () => {
  removeToken(TOKEN_KEY);
  removeToken(REFRESH_KEY);
};

export const getAccessToken = () => cookies.get(TOKEN_KEY);

export const getRefreshToken = () => cookies.get(REFRESH_KEY);
