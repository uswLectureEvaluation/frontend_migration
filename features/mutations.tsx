/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { AxiosError, isAxiosError } from 'axios';
import { useMutation } from 'react-query';

import { login } from '@/apis/user';
import { TOKEN_KEY } from '@/constants/auth';
import useToast from '@/hooks/useToast';
import { APIErrorResponse } from '@/interfaces/suwiki';
import { UserLoginFormValues } from '@/interfaces/user';
import { setToken } from '@/utils/tokenManeger';

export const useLogin = (onSuccess?: () => void) => {
  const toast = useToast();
  const mutation = useMutation(
    (formData: UserLoginFormValues) => login(formData),
    {
      onSuccess: (data) => {
        if (data) {
          if (onSuccess) {
            setToken(TOKEN_KEY, data.AccessToken);
            onSuccess();
          }
        }
      },
      onError: (error: AxiosError) => {
        if (isAxiosError<APIErrorResponse>(error) && error.response)
          toast({
            type: 'error',
            title: '로그인 실패',
            description: error.response.data.message,
          });
      },
    }
  );
  return mutation;
};
