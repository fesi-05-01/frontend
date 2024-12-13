import { useQuery } from '@tanstack/react-query';

import { get } from '~/src/services/api';
import { type JoinedGathering } from '~/src/services/gatherings/types';

export default function useJoinedGathering() {
  const queryResult = useQuery<JoinedGathering[]>({
    queryKey: ['joinedGathering'],
    queryFn: async () => {
      const response = await get<JoinedGathering[]>('/gatherings/joined');
      return response;
    },
  });

  return queryResult;
}
