import { useQuery } from '@tanstack/react-query';

import { get } from '~/src/services/api';
import { type User } from '~/src/services/auths/types';

export function useGetUserInfo() {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await get<User>('/auths/user');
      return response;
    },
  });
}
