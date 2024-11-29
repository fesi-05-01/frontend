'use client';
import { useState } from 'react';

import BoxSelect from '~/src/components/common/box-select';
import MainContainer from '~/src/components/layout/main-container';

export default function Example() {
  const [checkedStates, setCheckedStates] = useState([false, false]);
  const handleChange = (index: number, checked: boolean) => {
    setCheckedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? checked : state)),
    );
  };

  return (
    <MainContainer>
      <div className="flex justify-between bg-white p-4">
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
    </MainContainer>
  );
}
