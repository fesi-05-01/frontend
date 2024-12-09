import { useInfiniteQuery } from '@tanstack/react-query';

import { get } from '~/src/services/api';
import { gatheringsQueryKeys } from '~/src/services/gatherings/queryKey';
import { type GetGatheringsResponse } from '~/src/services/gatherings/types';
import { type GatheringType } from '~/src/services/types';

const LIMIT = 10;

interface UseGatheringsParams {
  type?: GatheringType;
}

export default function useGatherings({ type }: UseGatheringsParams = {}) {
  return useInfiniteQuery({
    queryKey: gatheringsQueryKeys.gatherings({ type }),
    queryFn: async ({ pageParam = { limit: LIMIT, offset: 0 } }) => {
      const response = await get<GetGatheringsResponse>('/gatherings', {
        params: {
          limit: pageParam.limit,
          offset: pageParam.offset,
          ...(type && { type }),
        },
      });
      return response;
    },
    select: ({ pages }) => {
      const flattened = pages.flatMap((page) => page);
      return flattened;
    },
    initialPageParam: { limit: LIMIT, offset: 0 },
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length < LIMIT) {
        return undefined;
      }
      const nextOffset = (lastPageParam.offset ?? 0) + LIMIT;
      return { limit: LIMIT, offset: nextOffset };
    },
    staleTime: 1000 * 60 * 5,
  });
}
