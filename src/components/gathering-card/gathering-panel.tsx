import GatheringTab from '~/src/components/common/gathering-tab';
import CreateGatheringModal from '~/src/components/gatherings/create-gathering-modal';
import useReviewFilterAtom from '~/src/hooks/reviews/use-review-filter-atom';
import { type GatheringType } from '~/src/services/types';

export default function GatheringPanel() {
  const { filter, onChangeFilter } = useReviewFilterAtom();

  const handleChangeFilter = (type: GatheringType) => {
    onChangeFilter({ type });
  };

  return (
    <div className="flex flex-col gap-4">
      <GatheringTab className="gap-1">
        <div className="flex items-start justify-between">
          <GatheringTab.Main
            type={filter.type!}
            onChangeFilter={handleChangeFilter}
          />
          <CreateGatheringModal />
        </div>
        <GatheringTab.Sub
          type={filter.type!}
          onChangeFilter={handleChangeFilter}
        />
      </GatheringTab>
      {/* 필터 */}
      <div className="z-[5] flex justify-between gap-2">
        <div className="flex gap-2">
          {/* <Filter version="Right" options={tmpLocations} />
      <Filter version="Right" options={tmpDates} /> */}
        </div>
        {/* <Filter version="Left" options={tmpFilters} /> */}
      </div>
    </div>
  );
}
