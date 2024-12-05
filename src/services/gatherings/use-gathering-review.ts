import { useQuery } from '@tanstack/react-query';

import { get } from '~/src/services/api';
import { gatheringsQueryKeys } from '~/src/services/gatherings/queryKey';
import { type GetGatheringReviewResponse } from '~/src/services/gatherings/types';

export default function useGatheringReview(gatheringId: number) {
  return useQuery({
    queryKey: gatheringsQueryKeys.gatheringReview({ gatheringId }),
    queryFn: () => {
      return get<GetGatheringReviewResponse>(
        `/reviews?gatheringId=${gatheringId}`,
      );
    },
  });
}
