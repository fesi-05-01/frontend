'use client';

import { useEffect, useRef, useState } from 'react';

import Button from '~/src/components/common/button';
import Calender from '~/src/components/common/calender';
import { cn } from '~/src/utils/class-name';

interface CalendarDownProps {
  onDateSelect: (date: Date | undefined) => void;
  selectedDate: Date | undefined;
  onReset: () => void;
  onClose?: () => void;
  className?: string;
}

export default function CalendarDown({
  onDateSelect,
  selectedDate,
  onReset,
  onClose,
  className,
}: CalendarDownProps) {
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | undefined>(
    selectedDate,
  );
  const calendarRef = useRef<HTMLDivElement>(null);
  const handleSelectDate = (date: Date | undefined) => {
    setTempSelectedDate(date);
  };
  const handleSubmit = () => {
    if (tempSelectedDate) {
      onDateSelect(tempSelectedDate);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        onClose?.();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={calendarRef}
      className={cn(
        'absolute z-50 mt-2 flex w-[336px] flex-col gap-3 rounded-xl border-[1px] border-secondary-200 bg-white px-[43px] py-6 shadow-xl',
        className,
      )}
    >
      <Calender
        mode="single"
        onSelect={handleSelectDate}
        selected={tempSelectedDate}
        defaultMonth={tempSelectedDate ? tempSelectedDate : new Date()}
      />

      <span className="flex h-10 gap-2">
        <Button
          onClick={onReset}
          disabled={!tempSelectedDate}
          className="p-2"
          variant="outlined"
        >
          초기화
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!tempSelectedDate}
          className="p-2"
        >
          적용
        </Button>
      </span>
    </div>
  );
}
