import { useQuery } from '@tanstack/react-query';

import useReviewFilterAtom from '~/src/hooks/reviews/use-review-filter-atom';
import { get } from '~/src/services/api';
import { reviewsQueryKeys } from '~/src/services/reviews/queryKey';
import { type GetReviewScoreResponse } from '~/src/services/reviews/types';

export default function useGetReviewScore() {
  const { filter } = useReviewFilterAtom();
  const { type } = filter;

  return useQuery({
    queryKey: reviewsQueryKeys.reviewScore({ type }),
    queryFn: () =>
      get<GetReviewScoreResponse>(`/reviews/scores`, { params: { type } }),
    select: (data) => {
      const {
        averageScore,
        oneStar,
        twoStars,
        threeStars,
        fourStars,
        fiveStars,
      } = data[0];

      return {
        sum: oneStar + twoStars + threeStars + fourStars + fiveStars,
        average: averageScore,
        score: [fiveStars, fourStars, threeStars, twoStars, oneStar],
      };
    },
  });
}
