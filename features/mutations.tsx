/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { useMutation } from 'react-query';

import { login } from '@/apis/user';
import { TOKEN_KEY } from '@/constants/auth';
import { UserLoginFormValues } from '@/interfaces/user';
import { setToken } from '@/utils/tokenManeger';

export const useLogin = (onSuccess?: () => void) => {
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
    }
  );
  return mutation;
};
