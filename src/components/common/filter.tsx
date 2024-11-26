import { useState } from 'react';
import Image from 'next/image';

import DownCaret from '~/src/assets/icons/caret-down.svg?url';
import DownCaretInverse from '~/src/assets/icons/caret-down-inverse.svg?url';
import SortIcon from '~/src/assets/icons/sort.svg?url';
import Dropdown from '~/src/components/common/dropdown';
import { cn } from '~/src/utils/class-name';

interface filterProps extends React.ComponentPropsWithoutRef<'button'> {
  version: 'Left' | 'Right'; //기능에서 별다른 차이가 없어보이지만 아이콘이 좌우로 가는게 차이가 있어보여 2가지 타입을 지정했습니다
  options: string[];
}

export default function Filter({ version, options, ...rest }: filterProps) {
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
        {...rest}
        onClick={toggleDropdown}
        className={cn(
          'flex h-9 rounded-xl border-[2px] border-secondary-100 bg-white px-3 py-[6px] text-secondary-800',
          'sm:h-10 sm:py-2',
          version === 'Right' &&
            (isOpen
              ? 'justify-between border-none bg-secondary-900 text-secondary-50'
              : 'justify-between hover:bg-secondary-50'),
          version === 'Left' &&
            'h-9 w-9 px-[6px] py-[6px] hover:bg-secondary-50 sm:w-[120px] sm:gap-[10px] sm:px-3 sm:py-2',
          version !== 'Left' && 'w-[110px]',
        )}
      >
        <Image
          src={SortIcon}
          alt="sortIcon"
          width={24}
          height={24}
          className={`${version === 'Left' ? 'text-left' : 'hidden'}`}
        />

        <div
          className={`flex items-center text-sm ${version === 'Left' ? 'hidden sm:block' : ''}`}
        >
          {selected}
        </div>
        <Image
          src={isOpen ? DownCaretInverse : DownCaret}
          alt="Caret Icon"
          className={version === 'Right' ? 'text-left' : 'hidden'}
          width={24}
          height={24}
        />
      </button>

      {isOpen && (
        <Dropdown
          options={options}
          onSelect={selectOption}
          version="Filter"
          selectedOption={selected}
        />
      )}
    </div>
  );
}
