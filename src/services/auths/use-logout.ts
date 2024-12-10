import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';

import { post } from '~/src/services/api';
import { setAccessTokenAtom, setUserInfoAtom } from '~/src/stores/auth-store';

export function useLogout() {
  const router = useRouter();
  const setAccessToken = useSetAtom(setAccessTokenAtom);
  const setUserInfo = useSetAtom(setUserInfoAtom);

  return useMutation({
    mutationFn: async () => {
      const response = await post(`/auths/signout`);
      return response;
    },
    onSuccess: () => {
      setAccessToken(null);
      setUserInfo(null);
      alert('로그아웃 완료');
      router.push('/');
    },
    onError: (error) => {
      console.error('로그아웃 실패:', error);
    },
  });
}
