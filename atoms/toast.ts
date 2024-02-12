import { atom } from 'recoil';

export interface Toast {
  id?: string;
  title: string;
  description: string;
  description2?: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  selfRemove?: Function;
}

export const toastState = atom<Toast[]>({
  key: 'toastState',
  default: [],
});
