import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { get } from '~/src/services/api';
import { type ErrorResponseData, type User } from '~/src/services/auths/types';
import { accessTokenAtom } from '~/src/stores/auth-store';

export function useGetUserInfo() {
  const [token] = useAtom(accessTokenAtom);
  const { refetch, ...query } = useQuery<User, ErrorResponseData>({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await get<User>('/auths/user');
      return response;
    },
    enabled: !!token,
  });
  const refetchUser = async () => {
    const { data } = await refetch();
    return data;
  };

  return { ...query, refetchUser };
}
