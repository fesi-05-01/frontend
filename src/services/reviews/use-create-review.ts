import { useMutation } from '@tanstack/react-query';

import { post } from '~/src/services/api';
import {
  type CreateReviewRequest,
  type CreateReviewResponse,
} from '~/src/services/reviews/types';

export default function useCreateReview() {
  return useMutation({
    mutationFn: (data: CreateReviewRequest) =>
      post<CreateReviewResponse>(`/reviews`, data),
  });
}
