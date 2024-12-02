import { useState } from 'react';
import Image from 'next/image';

import DownCaret from '~/src/assets/icons/caret-down.svg?url';
import DownCaretInverse from '~/src/assets/icons/caret-down-inverse.svg?url';
import Dropdown from '~/src/components/common/dropdown';
import { cn } from '~/src/utils/class-name';

interface FilterProps extends React.ComponentPropsWithoutRef<'button'> {
  options: string[];
  className?: string;
  placeholder: string;
}

export default function RightFilter({
  placeholder,
  options,
  className,
  ...rest
}: FilterProps) {
  const [selected, setSelected] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);
  const isClickedFirst = isOpen || selected !== placeholder;
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
          'flex justify-between rounded-xl border-[2px] border-secondary-100 bg-white text-secondary-800',
          'min-w-[110px] mobile:h-9 mobile:px-[10px] tablet:h-10',
          isClickedFirst
            ? 'border-none bg-secondary-900 text-secondary-50 mobile:py-[6px] tablet:py-2'
            : 'hover:bg-secondary-50 mobile:py-1 tablet:py-[6px]',
          className,
        )}
      >
        <div className={cn('text-sm mobile:py-[2px]', className)}>
          {selected}
        </div>
        <Image
          src={isClickedFirst ? DownCaretInverse : DownCaret}
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
