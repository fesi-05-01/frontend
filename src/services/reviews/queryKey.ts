import {
  type GetReviewListRequest,
  type GetReviewScoreRequest,
} from '~/src/services/reviews/types';

export const reviewsQueryKeys = {
  reviewInfiniteList: (params?: GetReviewListRequest) =>
    params
      ? (['reviewInfiniteList', params] as const)
      : (['reviewInfiniteList'] as const),
  reviewScore: (params?: GetReviewScoreRequest) =>
    params ? (['reviewScore', params] as const) : (['reviewScore'] as const),
};
