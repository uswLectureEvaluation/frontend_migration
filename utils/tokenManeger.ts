import { Cookies } from 'react-cookie';

import { TOKEN_KEY } from '@/constants/auth';

const cookies = new Cookies();

export const setToken = (key: typeof TOKEN_KEY, token: string) => {
  const expires = new Date();
  const afterTwelveHours = Date.now() + 1000 * 60 * 60 * 12;
  expires.setDate(afterTwelveHours);

  cookies.set(key, token, {
    path: '/',
    expires,
  });
};

export const removeToken = (key: typeof TOKEN_KEY) => {
  cookies.remove(key, { path: '/' });
};

export const removeTokenAll = () => {
  removeToken(TOKEN_KEY);
};

export const getAccessToken = () => cookies.get(TOKEN_KEY);
