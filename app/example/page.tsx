'use client';
import { useState } from 'react';

import BoxSelect from '~/src/components/common/box-select';
import LeftFilter from '~/src/components/common/left-filter';
import RightFilter from '~/src/components/common/right-filter';
import MainContainer from '~/src/components/layout/main-container';

export default function Example() {
  const [checkedStates, setCheckedStates] = useState([false, false]);
  const handleChange = (index: number, checked: boolean) => {
    setCheckedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? checked : state)),
    );
  };
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
        <BoxSelect
          title="달램핏"
          description="오피스 스트레칭"
          checked={checkedStates[0]}
          onChange={(checked) => handleChange(0, checked)}
        />
        <BoxSelect
          title="달램핏"
          description="오피스 스트레칭"
          checked={checkedStates[1]}
          onChange={(checked) => handleChange(1, checked)}
        />
      </div>
      <div className="flex justify-between p-4">
        <LeftFilter options={options} />
        <RightFilter options={regions} placeholder="지역 전체" />
      </div>
    </MainContainer>
  );
}
