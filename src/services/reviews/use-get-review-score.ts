import { useQuery } from '@tanstack/react-query';

import { get } from '~/src/services/api';
import { reviewsQueryKeys } from '~/src/services/reviews/queryKey';
import {
  type GetReviewScoreRequest,
  type GetReviewScoreResponse,
} from '~/src/services/reviews/types';

export default function useGetReviewScore(params?: GetReviewScoreRequest) {
  return useQuery({
    queryKey: reviewsQueryKeys.reviewScore(params),
    queryFn: () => get<GetReviewScoreResponse>(`/reviews/scores`, { params }),
  });
}
