'use client';

import LeftFilter from '~/src/components/common/left-filter';
import RightFilter from '~/src/components/common/right-filter';
import MainContainer from '~/src/components/layout/main-container';

export default function Example() {
  const options = ['아무것도', '하기', '싫다!', '으아아아아아아아아아아아악'];
  const regions = [
    '봉천동',
    '을지로',
    '성동구',
    '서울 강남구 선릉로86길 40-4 알앤지타운 1층',
  ];

  return (
    <MainContainer className="bg-lime-600">
      <div className="flex justify-between p-4">
        <RightFilter
          options={options}
          calendar={true}
          placeholder="날짜 전체"
        />
      </div>
      <div className="flex justify-between p-4">
        <LeftFilter options={options} />

        <RightFilter options={regions} placeholder="지역 전체" />
      </div>
    </MainContainer>
  );
}
