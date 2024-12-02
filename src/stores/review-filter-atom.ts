import { atom } from 'jotai';

import { type GetReviewListRequest } from '~/src/services/reviews/types';

export type ReviewFilter = Omit<GetReviewListRequest, 'limit' | 'offset'>;

export const reviewFilterAtom = atom<ReviewFilter>({
  type: 'DALLAEMFIT',
});
