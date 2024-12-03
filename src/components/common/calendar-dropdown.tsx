'use client';

import { useEffect, useState } from 'react';

import Button from '~/src/components/common/button';
import Calender from '~/src/components/common/calender';
import { cn } from '~/src/utils/class-name';

interface CalendarDownProps {
  onDateSelect: (date: Date | undefined) => void;
  selectedDate: Date | undefined;
  onReset: () => void;
  className?: string;
}

export default function CalendarDown({
  onDateSelect,
  selectedDate,
  onReset,
  className,
}: CalendarDownProps) {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!selectedDate);
  }, [selectedDate]);

  const handleSelectDate = (date: Date | undefined) => {
    onDateSelect(date);
  };

  const handleSubmit = () => {
    if (selectedDate) {
      onDateSelect(selectedDate);
      console.log(selectedDate);
    }
  };

  return (
    <div
      className={cn(
        'mt-2 flex w-[336px] flex-col gap-3 rounded-xl border-[1px] border-secondary-200 bg-white px-[43px] py-6 shadow-xl',
        className,
      )}
    >
      <Calender
        mode="single"
        onSelect={handleSelectDate}
        selected={selectedDate}
        defaultMonth={selectedDate ? selectedDate : new Date()}
      />

      <span className="flex h-10 gap-2">
        <Button
          onClick={onReset}
          disabled={isDisabled}
          className="p-2"
          variant="outlined"
        >
          초기화
        </Button>
        <Button onClick={handleSubmit} disabled={isDisabled} className="p-2">
          적용
        </Button>
      </span>
    </div>
  );
}
