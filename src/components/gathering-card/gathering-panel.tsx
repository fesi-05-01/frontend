'use client';

import GatheringTab from '~/src/components/common/gathering-tab';
import LeftFilter from '~/src/components/common/left-filter';
import RightFilter from '~/src/components/common/right-filter';
import CreateGatheringModal from '~/src/components/gatherings/create-gathering-modal';
import { useGatheringFilter } from '~/src/hooks/gatherings/use-gathering-filter';
import { type SortBy } from '~/src/services/gatherings/types';
import {
  type GatheringLocation,
  type GatheringType,
} from '~/src/services/types';

export default function GatheringPanel() {
  const { type, setType, setLocation, setDate, setSortBy } =
    useGatheringFilter();

  const handleChangeType = (type: GatheringType) => {
    setType(type);
  };

  const handleLocationSelect = (option: string) => {
    console.log('Location selected:', option);
    setLocation(option as GatheringLocation);
  };

  const handleDateSelect = (date: Date) => {
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    setDate(formattedDate);
  };

  const handleSortBySelect = (option: string) => {
    let sortOption: SortBy;
    switch (option) {
      case '마감 임박':
        sortOption = 'registrationEnd';
        break;
      case '참여 인원 순':
        sortOption = 'participantCount';
        break;
      default:
        return;
    }
    console.log('Selected sort option:', option);
    console.log('sortOption', sortOption);
    setSortBy(sortOption);
  };

  return (
    <div className="flex flex-col gap-4">
      <GatheringTab className="gap-1">
        <div className="flex items-start justify-between">
          <GatheringTab.Main type={type} onChangeFilter={handleChangeType} />
          <CreateGatheringModal />
        </div>
        <GatheringTab.Sub type={type} onChangeFilter={handleChangeType} />
      </GatheringTab>
      <div className="z-[5] flex justify-between gap-2">
        <div className="flex gap-2">
          <RightFilter
            placeholder="지역 전체"
            options={['지역 전체', '건대입구', '을지로3가', '신림', '홍대입구']}
            onOptionSelect={(option) => {
              handleLocationSelect(option);
            }}
          />
          <RightFilter
            calendar={true}
            options={[]}
            placeholder="날짜 전체"
            onDateSelect={(date) => handleDateSelect(date)}
          />
        </div>
        <LeftFilter
          options={['마감 임박', '참여 인원 순']}
          onOptionSelect={(option) => handleSortBySelect(option)}
        />
      </div>
    </div>
  );
}
