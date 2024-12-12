import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { post } from '~/src/services/api';
import { reviewsQueryKeys } from '~/src/services/reviews/queryKey';
import {
  type CreateReviewRequest,
  type CreateReviewResponse,
} from '~/src/services/reviews/types';

export default function useCreateReview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateReviewRequest) =>
      post<CreateReviewResponse>(`/reviews`, data),
    onSuccess: () => {
      toast.success('리뷰가 작성되었습니다.');

      queryClient.invalidateQueries({
        queryKey: reviewsQueryKeys.reviewInfiniteList(),
      });
      queryClient.invalidateQueries({
        queryKey: reviewsQueryKeys.reviewScore(),
      });
    },
  });
}
