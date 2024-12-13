import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { get } from '~/src/services/api';
import { type JoinedGathering } from '~/src/services/gatherings/types';
import { userInfoAtom } from '~/src/stores/auth-store';
export default function useJoinedGathering() {
  const [user] = useAtom(userInfoAtom);

  const queryResult = useQuery<JoinedGathering[]>({
    queryKey: ['joinedGathering'],
    enabled: !!user,
    queryFn: async () => {
      const response = await get<JoinedGathering[]>('/gatherings/joined');
      return response;
    },
  });

  return queryResult;
}
