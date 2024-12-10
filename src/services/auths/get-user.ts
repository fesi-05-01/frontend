import { useQuery } from '@tanstack/react-query';

import { get } from '~/src/services/api';
import { type ErrorResponseData, type User } from '~/src/services/auths/types';

export function useGetUserInfo() {
  const { refetch, ...query } = useQuery<User, ErrorResponseData>({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await get<User>('/auths/user');
      return response;
    },
    enabled: false,
  });
  const refetchUser = async () => {
    const { data } = await refetch();
    return data;
  };

  return { ...query, refetchUser };
}
