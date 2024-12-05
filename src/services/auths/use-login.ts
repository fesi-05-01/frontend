import { type UseFormReturn } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';

import {
  type ErrorResponseData,
  type SigninData,
  type TokenResponseData,
} from '~/src/components/authpage/types';
import { post } from '~/src/services/api';
import { setAccessTokenAtom } from '~/src/store/auth-store';

export function useLogin(form: UseFormReturn<SigninData>) {
  const setAccessToken = useSetAtom(setAccessTokenAtom);
  const router = useRouter();

  return useMutation<TokenResponseData, ErrorResponseData, SigninData>({
    mutationFn: (data) =>
      post<TokenResponseData>('/auths/signin', {
        email: data.email,
        password: data.password,
      }),
    onSuccess: (data: TokenResponseData) => {
      setAccessToken(data.token);
      router.push('/');
    },
    onError: (error) => {
      if (error?.data?.code === 'INVALID_CREDENTIALS') {
        form.setError('password', {
          type: 'manual',
          message: '비밀번호가 아이디와 일치하지 않습니다.',
        });
      }
      if (error?.data?.code === 'USER_NOT_FOUND') {
        form.setError('email', {
          type: 'manual',
          message: '존재하지 않는 아이디입니다.',
        });
      }
      if (error?.data?.code === 'SERVER_ERROR') {
        form.setError('email', {
          type: 'manual',
          message: '서버 오류가 발생했습니다.',
        });
      }
    },
  });
}
