'use client';

import { useState } from 'react';

import Button from '~/src/components/common/button';
// import Filter from '~/src/components/common/filter';
import GatheringTab from '~/src/components/common/gathering-tab';
import PageTitleWithImage from '~/src/components/common/page-title-with-image';
import CardContainer from '~/src/components/gathering-card/card-container';
import MainContainer from '~/src/components/layout/main-container';
import useReviewFilterAtom from '~/src/hooks/reviews/use-review-filter-atom';
import { type GatheringType } from '~/src/services/types';

// const tmpLocations = ['지역 선택', '건대입구', '을지로3가', '신림', '홍대입구'];
// const tmpDates = ['날짜 선택', '달력 연결 나중에'];
// const tmpFilters = ['마감 임박', '참여 인원 순'];

export default function GatheringsPage() {
  const [isEmpty, setIsEmpty] = useState(true);
  const { filter, onChangeFilter } = useReviewFilterAtom();

  const handleChangeFilter = (type: GatheringType) => {
    onChangeFilter({ type });
  };

  const handleTmpEmptyBtn = () => {
    setIsEmpty(!isEmpty);
  };

  return (
    <MainContainer className="flex flex-col">
      <PageTitleWithImage />
      <div className="flex flex-1 flex-col gap-6">
        {/* Control Panel */}
        <div className="flex flex-col gap-4">
          <GatheringTab className="gap-1">
            <div className="flex items-start justify-between">
              <GatheringTab.Main
                type={filter.type!}
                onChangeFilter={handleChangeFilter}
              />
              <Button className="w-[115px]">모임 만들기</Button>
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
              <button
                className="border border-black bg-gray-200 p-2"
                onClick={handleTmpEmptyBtn}
              >
                isEmpty
              </button>
            </div>
            {/* <Filter version="Left" options={tmpFilters} /> */}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 items-center justify-center">
          {isEmpty ? (
            <div className="text-center text-sm font-medium text-gray-500">
              아직 모임이 없어요, <br />
              지금 바로 모임을 만들어보세요!
            </div>
          ) : (
            <CardContainer />
          )}
        </div>
      </div>
    </MainContainer>
  );
}
