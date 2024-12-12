import { atomWithReset } from 'jotai/utils';

import { type GetReviewListRequest } from '~/src/services/reviews/types';
import { type PageParam } from '~/src/services/types';

export type ReviewFilter = Omit<GetReviewListRequest, keyof PageParam>;

export const reviewFilterAtom = atomWithReset<ReviewFilter>({
  type: 'DALLAEMFIT',
  sortBy: 'createdAt',
});
