import { useInfiniteQuery } from '@tanstack/react-query';

import { get } from '~/src/services/api';
import { reviewsQueryKeys } from '~/src/services/reviews/queryKey';
import {
  type GetReviewListRequest,
  type GetReviewListResponse,
} from '~/src/services/reviews/types';

const LIMIT = 10;

export default function useGetReviewList(params?: GetReviewListRequest) {
  return useInfiniteQuery({
    queryKey: reviewsQueryKeys.reviewList(params),
    queryFn: ({ pageParam }) =>
      get<GetReviewListResponse>('/reviews', { params, ...pageParam }),
    initialPageParam: { limit: LIMIT, offset: 0 },
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return lastPage.length < LIMIT
        ? undefined
        : { limit: LIMIT, offset: lastPageParam.offset + LIMIT };
    },
  });
}
