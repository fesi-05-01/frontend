import { useState } from 'react';
import Image from 'next/image';

import DownCaret from '~/src/assets/icons/caret-down.svg?url';
import DownCaretInverse from '~/src/assets/icons/caret-down-inverse.svg?url';
import Dropdown from '~/src/components/common/dropdown';
import { cn } from '~/src/utils/class-name';

interface FilterProps extends React.ComponentPropsWithoutRef<'button'> {
  options: string[];
  className?: string;
}

export default function RightFilter({
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
          'flex justify-between rounded-xl border-[2px] border-secondary-100 bg-white text-secondary-800 mobile:h-9 mobile:px-[10px] mobile:py-1',
          'min-w-[110px] tablet:h-10 tablet:py-[6px]',
          isOpen
            ? 'border-none bg-secondary-900 text-secondary-50'
            : 'hover:bg-secondary-50',
          className,
        )}
      >
        <div className={cn('py-[2px] text-sm', className)}>{selected}</div>
        <Image
          src={isOpen ? DownCaretInverse : DownCaret}
          alt="Caret Icon"
          className="text-right"
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
