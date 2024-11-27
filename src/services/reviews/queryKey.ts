import {
  type GetReviewListRequest,
  type GetReviewScoreRequest,
} from '~/src/services/reviews/types';

export const reviewsQueryKeys = {
  reviewList: (params?: GetReviewListRequest) =>
    ['reviewList', params] as const,
  reviewScore: (params?: GetReviewScoreRequest) =>
    ['reviewScore', params] as const,
};
