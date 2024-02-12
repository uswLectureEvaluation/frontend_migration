import { VStack } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { toastState } from '@/atoms/toast';

import SuwikiToast from './Toast';

function ToastList() {
  const toasts = useRecoilValue(toastState);
  return (
    <VStack
      zIndex={9999}
      spacing="5px"
      pos="fixed"
      top="10px"
      right="10px"
      align="flex-end"
    >
      {toasts.map((toast) => (
        <SuwikiToast key={toast.id} {...toast} />
      ))}
    </VStack>
  );
}

export default ToastList;
