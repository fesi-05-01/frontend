'use client';

import LeftFilter from '~/src/components/common/left-filter';
import RightFilter from '~/src/components/common/right-filter';
import useReviewFilterAtom from '~/src/hooks/reviews/use-review-filter-atom';
import { type ReviewSortBy } from '~/src/services/reviews/types';
import { type GatheringLocation } from '~/src/services/types';
import { getDateForFormData } from '~/src/utils/date';

const SORT_OPTIONS: Record<string, ReviewSortBy> = {
  최신순: 'createdAt',
  '리뷰 높은 순': 'score',
  '참여 인원 순': 'participantCount',
};

export default function ReviewFilter() {
  const { onChangeFilter } = useReviewFilterAtom();

  const handleLocationSelect = (value: string) => {
    const location =
      value === '전체' ? undefined : (value as GatheringLocation);
    onChangeFilter({ location });
  };

  const handleDateSelect = (date: Date) => {
    onChangeFilter({ date: getDateForFormData(date) });
  };

  const handleDateReset = () => {
    onChangeFilter({ date: undefined });
  };

  const handleSortBySelect = (value: string) => {
    const sortBy = SORT_OPTIONS[value];
    onChangeFilter({ sortBy });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <RightFilter
          options={['전체', '건대입구', '을지로3가', '신림', '홍대입구']}
          onOptionSelect={handleLocationSelect}
          placeholder="지역 선택"
        />

        <RightFilter
          calendar
          options={[]}
          onDateSelect={handleDateSelect}
          onDateReset={handleDateReset}
          placeholder="날짜 선택"
        />
      </div>

      <LeftFilter
        options={Object.keys(SORT_OPTIONS)}
        onOptionSelect={handleSortBySelect}
      />
    </div>
  );
}
