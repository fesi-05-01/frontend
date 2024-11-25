import { useState } from 'react';

import Dropdown from '~/src/components/common/Dropdown';

export default function Filter({
  type,
  options,
}: {
  type: 'Left' | 'Right'; //기능에서 별다른 차이가 없어보이지만 아이콘이 좌우로 가는게 차이가 있어보여 2가지 타입을 지정했습니다
  options: string[];
}) {
  const [selected, setSelected] = useState('Filter');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative h-9 w-[110px] lg:h-10 lg:w-[120px]">
      <button
        onClick={toggleDropdown}
        className="w-full rounded border border-gray-300 bg-white px-4 py-2 hover:bg-gray-100"
      >
        <div className={`${type === 'Left' ? 'text-left' : 'hidden'}`}>왼</div>
        {selected}
        <div className={`${type === 'Right' ? 'text-left' : 'hidden'}`}>오</div>
      </button>
      {isOpen && (
        <Dropdown options={options} onSelect={selectOption} type={type} />
      )}
    </div>
  );
}
