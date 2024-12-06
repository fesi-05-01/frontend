import { useInfiniteQuery } from '@tanstack/react-query';

import { get } from '~/src/services/api';
import { gatheringsQueryKeys } from '~/src/services/gatherings/queryKey';
import { type GetGatheringsResponse } from '~/src/services/gatherings/types';

const LIMIT = 10;

export default function useGatherings() {
  return useInfiniteQuery({
    queryKey: gatheringsQueryKeys.gatherings(),
    queryFn: ({ pageParam }) =>
      get<GetGatheringsResponse>('/gatherings', {
        params: { ...pageParam },
      }),
    select: ({ pages }) => {
      return pages.flatMap((page) => page);
    },
    initialPageParam: { limit: LIMIT, offset: 0 },
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return lastPage.length < LIMIT
        ? undefined
        : { limit: LIMIT, offset: lastPageParam.offset + LIMIT };
    },
    staleTime: 1000 * 60 * 5,
  });
}
