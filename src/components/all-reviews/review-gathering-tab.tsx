'use client';

import GatheringTab from '~/src/components/common/gathering-tab';
import useReviewFilterAtom from '~/src/hooks/use-review-filter-atom';
import { type GatheringType } from '~/src/services/types';

export default function ReviewGatheringTab() {
  const { filter, onChangeFilter } = useReviewFilterAtom();

  const handleChangeFilter = (type: GatheringType) => {
    onChangeFilter({ type });
  };

  return (
    <GatheringTab>
      <GatheringTab.Main
        type={filter.type!}
        onChangeFilter={handleChangeFilter}
      />
      <GatheringTab.Sub
        type={filter.type!}
        onChangeFilter={handleChangeFilter}
      />
    </GatheringTab>
  );
}
