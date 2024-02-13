/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { AxiosError, isAxiosError } from 'axios';
import { useMutation } from 'react-query';

import { login } from '@/apis/user';
import { REFRESH_KEY, TOKEN_KEY } from '@/constants/auth';
import ROUTES from '@/constants/routes';
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
            setToken(REFRESH_KEY, data.RefreshToken);
            onSuccess();
            window.location.href = ROUTES.MAIN;
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
