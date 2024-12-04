import { useAtom } from 'jotai';

import {
  type ReviewFilter,
  reviewFilterAtom,
} from '~/src/stores/review-filter-atom';

export default function useReviewFilterAtom() {
  const [filter, setFilter] = useAtom(reviewFilterAtom);

  const onChangeFilter = (filter: ReviewFilter) => {
    setFilter((prev) => ({ ...prev, ...filter }));
  };

  return { filter, onChangeFilter };
}
