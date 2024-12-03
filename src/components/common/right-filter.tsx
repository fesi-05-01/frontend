import { useCallback, useState } from 'react';
import Image from 'next/image';

import DownCaret from '~/src/assets/icons/caret-down.svg?url';
import DownCaretInverse from '~/src/assets/icons/caret-down-inverse.svg?url';
import CalendarDown from '~/src/components/common/calendar-dropdown';
import Dropdown from '~/src/components/common/dropdown';
import { cn } from '~/src/utils/class-name';

interface FilterProps extends React.ComponentPropsWithoutRef<'button'> {
  options: string[];
  className?: string;
  placeholder: string;
  calendar?: boolean;
}

function Yymmdd(date: Date) {
  const yy = String(date.getFullYear()).slice(-2);
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  return `${yy}/${mm}/${dd}`;
}

export default function RightFilter({
  placeholder,
  options,
  className,
  calendar = false,
  ...rest
}: FilterProps) {
  const [selected, setSelected] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const isClickedFirst = isOpen || selected !== placeholder;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  const handleCalendarSelect = (date: Date | undefined) => {
    setSelected(Yymmdd(date!));
    setSelectedDate(date);
    setIsOpen(false);
  };

  const handleReset = useCallback(() => {
    setSelected(placeholder);
    setSelectedDate(undefined);
  }, [placeholder]);

  return (
    <div className="relative whitespace-nowrap">
      <button
        {...rest}
        onClick={toggleDropdown}
        className={cn(
          'flex justify-between rounded-xl border-[2px] border-secondary-100 bg-white text-secondary-800',
          'h-9 min-w-[110px] px-[10px] tablet:h-10',
          isClickedFirst
            ? 'border-none bg-secondary-900 py-[6px] text-secondary-50 tablet:py-2'
            : 'py-1 hover:bg-secondary-50 tablet:py-[6px]',
          className,
        )}
      >
        <div className={cn('py-[2px] text-sm', className)}>{selected}</div>
        <Image
          src={isClickedFirst ? DownCaretInverse : DownCaret}
          alt="Caret Icon"
          className="text-right"
          width={24}
          height={24}
        />
      </button>

      {isOpen && (
        <>
          {calendar ? (
            <CalendarDown
              onDateSelect={handleCalendarSelect}
              selectedDate={selectedDate}
              onReset={handleReset}
              onClose={() => setIsOpen(false)}
            />
          ) : (
            <Dropdown
              options={options}
              onSelect={selectOption}
              version="Filter"
              selectedOption={selected}
              onClose={() => setIsOpen(false)}
            />
          )}
        </>
      )}
    </div>
  );
}
