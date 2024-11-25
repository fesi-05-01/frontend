import { useState } from 'react';

import Dropdown from '~/src/components/common/dropdown';

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
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex h-8 w-[110px] rounded-xl border-[2px] border-secondary-100 bg-white px-3 py-[6px] text-secondary-800 hover:bg-secondary-50 sm:h-9 sm:w-[120px] sm:py-2 ${
          type === 'Right'
            ? 'justify-between active:border-none active:bg-secondary-900 active:text-secondary-50'
            : 'gap-[10px]'
        } ${type === 'Left' ? 'h-9 w-9 px-[6px] py-[6px] sm:h-auto sm:w-auto sm:px-3 sm:py-2' : ''}`}
      >
        <div className={`${type === 'Left' ? 'text-left' : 'hidden'}`}>왼</div>
        <div className={`${type === 'Left' ? 'hidden sm:block' : ''}`}>
          {selected}
        </div>
        <div className={`${type === 'Right' ? 'text-left' : 'hidden'}`}>오</div>
      </button>

      {isOpen && (
        <Dropdown options={options} onSelect={selectOption} type={type} />
      )}
    </div>
  );
}
