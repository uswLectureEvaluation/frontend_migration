import { useSetRecoilState } from 'recoil';

import { Toast, toastState } from '@/atoms/toast';
import { randomId } from '@/utils/randomId';

const useToast = () => {
  const setToasts = useSetRecoilState(toastState);

  const removeToast = (toastID: Toast['id']) =>
    setToasts((prev) => prev.filter((toast) => toast.id !== toastID));

  const fireToast = (toast: Toast) => {
    const toastTmp = toast;
    toastTmp.selfRemove = removeToast;
    const id = toastTmp.id ?? toastTmp.title + randomId().toString();
    setToasts((prev) => [{ ...toastTmp, id }, ...prev]);
  };

  return fireToast;
};

export default useToast;
