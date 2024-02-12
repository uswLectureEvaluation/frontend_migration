import { atom } from 'recoil';

/* eslint-disable import/prefer-default-export */
export const isLoginState = atom<boolean>({
  key: 'isLoginState',
  default: false,
});
