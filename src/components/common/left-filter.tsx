import { useState } from 'react';
import Image from 'next/image';

import SortIcon from '~/src/assets/icons/sort.svg?url';
import Dropdown from '~/src/components/common/dropdown';
import { cn } from '~/src/utils/class-name';

interface FilterProps extends React.ComponentPropsWithoutRef<'button'> {
  options: string[];
  className?: string;
}

export default function LeftFilter({
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
          'flex rounded-xl border-[2px] border-secondary-100 bg-white text-secondary-800 hover:bg-secondary-50',
          'h-9 w-9 px-[6px] py-[6px]',
          'tablet:h-10 tablet:w-auto tablet:min-w-[120px] tablet:gap-[10px] tablet:px-[10px] tablet:py-[6px]',
          className,
        )}
      >
        <Image src={SortIcon} alt="sortIcon" width={24} height={24} />

        <div
          className={cn(
            'hidden flex-col items-center justify-center py-[2px] text-sm tablet:block',
            className,
          )}
        >
          {selected}
        </div>
      </button>

      {isOpen && (
        <Dropdown
          options={options}
          onSelect={selectOption}
          version="Filter"
          selectedOption={selected}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
