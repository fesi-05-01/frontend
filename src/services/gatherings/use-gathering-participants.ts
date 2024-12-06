import { useInfiniteQuery } from '@tanstack/react-query';

import { get } from '~/src/services/api';
import { gatheringsQueryKeys } from '~/src/services/gatherings/queryKey';
import { type GetGatheringParticipantsResponse } from '~/src/services/gatherings/types';

export default function useGatheringParticipants(gatheringId: number) {
  return useInfiniteQuery({
    queryKey: gatheringsQueryKeys.gatheringParticipants({
      gatheringId: gatheringId,
    }),
    queryFn: ({ pageParam = 0 }) => {
      return get<GetGatheringParticipantsResponse>(
        `/gatherings/${gatheringId}/participants`,
        {
          params: {
            offset: pageParam,
          },
        },
      );
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 5) return undefined;
      return allPages.length * 5; // 다음 offset 계산
    },
  });
}
