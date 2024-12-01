import { useState } from 'react';
import Image from 'next/image';

import DownCaret from '~/src/assets/icons/caret-down.svg?url';
import DownCaretInverse from '~/src/assets/icons/caret-down-inverse.svg?url';
import SortIcon from '~/src/assets/icons/sort.svg?url';
import Dropdown from '~/src/components/common/dropdown';
import { cn } from '~/src/utils/class-name';

interface FilterProps extends React.ComponentPropsWithoutRef<'button'> {
  version: 'Left' | 'Right'; //기능에서 별다른 차이가 없어보이지만 아이콘이 좌우로 가는게 차이가 있어보여 2가지 타입을 지정했습니다
  options: string[];
  className?: string;
}

export default function Filter({
  version,
  options,
  className,
  ...rest
}: FilterProps) {
  const [selected, setSelected] = useState(
    options.length > 0 ? options[0] : '',
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative whitespace-nowrap">
      <button
        {...rest}
        onClick={toggleDropdown}
        className={cn(
          'flex h-9 rounded-xl border-[2px] border-secondary-100 bg-white px-3 py-[6px] text-secondary-800',
          'mobile:h-10 mobile:py-2',
          version === 'Right' &&
            cn(
              isOpen
                ? 'justify-between border-none bg-secondary-900 text-secondary-50'
                : 'justify-between hover:bg-secondary-50',
              className,
            ),
          version === 'Left' &&
            cn(
              'h-9 w-9 px-[6px] py-[6px] hover:bg-secondary-50',
              'w-auto',
              'mobile:min-w-[120px] mobile:gap-[10px] mobile:px-3 mobile:py-2',
              className,
            ),
          version !== 'Left' && 'min-w-[110px]',
          className,
        )}
      >
        <Image
          src={SortIcon}
          alt="sortIcon"
          width={24}
          height={24}
          className={cn(version === 'Left' ? 'text-left' : 'hidden', className)}
        />

        <div
          className={cn(
            'flex items-center text-sm',
            version === 'Left' ? 'hidden mobile:block' : '',
            className,
          )}
        >
          {selected}
        </div>
        <Image
          src={isOpen ? DownCaretInverse : DownCaret}
          alt="Caret Icon"
          className={cn(
            version === 'Right' ? 'text-left' : 'hidden',
            className,
          )}
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
