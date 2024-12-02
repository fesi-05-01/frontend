'use client';

import { useState } from 'react';

import Button from '~/src/components/common/button';
import Filter from '~/src/components/common/filter';
import CardContainer from '~/src/components/gathering-card/card-container';
import MainContainer from '~/src/components/layout/main-container';

const tmpLocations = ['지역 선택', '건대입구', '을지로3가', '신림', '홍대입구'];
const tmpDates = ['날짜 선택', '달력 연결 나중에'];
const tmpFilters = ['마감 임박', '참여 인원 순'];

export default function GatheringsPage() {
  const [isEmpty, setIsEmpty] = useState(true);

  const handleTmpEmptyBtn = () => {
    setIsEmpty(!isEmpty);
  };

  return (
    <MainContainer className="flex flex-col">
      <div className="flex flex-1 flex-col gap-6">
        {/* 필터링 gap-6 */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <button
              className="border border-black bg-gray-200 p-2"
              onClick={handleTmpEmptyBtn}
            >
              isEmpty
            </button>
            <Button className="w-[115px]">모임 만들기</Button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="">전체 오피스스트레칭</div>
            <div className="z-[5] flex justify-between gap-2">
              <div className="flex gap-2">
                <Filter version="Right" options={tmpLocations} />
                <Filter version="Right" options={tmpDates} />
              </div>
              <Filter version="Left" options={tmpFilters} />
            </div>
          </div>
        </div>

        {/* body */}
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
