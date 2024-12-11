import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { toast } from 'sonner';

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
      router.push('/');
      toast.success('로그아웃 되었습니다.');
    },
    onError: (error) => {
      console.error('로그아웃 중 오류', error);
    },
  });
}
