import {
  type GetReviewListRequest,
  type GetReviewScoreRequest,
} from '~/src/services/reviews/types';

export const reviewsQueryKeys = {
  reviewInfiniteList: (params?: GetReviewListRequest) =>
    ['reviewInfiniteList', params] as const,
  reviewScore: (params?: GetReviewScoreRequest) =>
    ['reviewScore', params] as const,
};
