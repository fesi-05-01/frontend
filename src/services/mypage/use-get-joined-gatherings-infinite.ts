import { useInfiniteQuery } from '@tanstack/react-query';

import { get } from '~/src/services/api';
import { gatheringsQueryKeys } from '~/src/services/mypage/queryKey';
import {
  type GetJoinedGatheringsRequest,
  type GetJoinedGatheringsResponse,
} from '~/src/services/mypage/types';
const LIMIT = 10;

export default function useGetJoinedGatheringsInfinite(
  params: GetJoinedGatheringsRequest,
) {
  return useInfiniteQuery({
    queryKey: gatheringsQueryKeys.joinedInfiniteList(params),
    queryFn: ({ pageParam }) =>
      get<GetJoinedGatheringsResponse>(`/gatherings/joined`, {
        params: { ...params, ...pageParam },
      }),
    initialPageParam: { limit: LIMIT, offset: 0 },
    getNextPageParam: (lastPage, _, lastPageParam) =>
      lastPage.length < LIMIT
        ? undefined
        : { limit: LIMIT, offset: lastPageParam.offset + LIMIT },
  });
}
