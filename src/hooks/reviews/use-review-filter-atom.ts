import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import {
  type ReviewFilter,
  reviewFilterAtom,
} from '~/src/stores/review-filter-atom';

export default function useReviewFilterAtom() {
  const [filter, setFilter] = useAtom(reviewFilterAtom);
  const onResetFilter = useResetAtom(reviewFilterAtom);

  const onChangeFilter = useCallback(
    (filter: ReviewFilter) => {
      setFilter((prev) => ({ ...prev, ...filter }));
    },
    [setFilter],
  );

  return { filter, onChangeFilter, onResetFilter };
}
