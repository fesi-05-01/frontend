import { useInfiniteQuery } from '@tanstack/react-query';

import useReviewFilterAtom from '~/src/hooks/use-review-filter-atom';
import { get } from '~/src/services/api';
import { reviewsQueryKeys } from '~/src/services/reviews/queryKey';
import { type GetReviewListResponse } from '~/src/services/reviews/types';

const LIMIT = 10;

export default function useGetReviewList() {
  const { filter: params } = useReviewFilterAtom();

  return useInfiniteQuery({
    queryKey: reviewsQueryKeys.reviewList(params),
    queryFn: ({ pageParam }) =>
      get<GetReviewListResponse>('/reviews', {
        params: { ...params, ...pageParam },
      }),
    select: ({ pages }) => {
      return pages.flatMap((data) => data);
    },
    initialPageParam: { limit: LIMIT, offset: 0 },
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return lastPage.length < LIMIT
        ? undefined
        : { limit: LIMIT, offset: lastPageParam.offset + LIMIT };
    },
  });
}
