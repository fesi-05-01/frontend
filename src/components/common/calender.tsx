'use client';
import { DayPicker } from 'react-day-picker';

import ButtonLeft from '~/src/assets/icons/caret-left.svg';
import ButtonRight from '~/src/assets/icons/caret-right.svg';
import { cn } from '~/src/utils/class-name';
export type CalendarProps = React.ComponentProps<typeof DayPicker>;
export default function Calender({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <>
      <DayPicker
        {...props}
        showOutsideDays={showOutsideDays}
        className={cn('w-full, p-2, box-border', className)}
        classNames={{
          outside: 'text-gray-400',
          disabled: 'text-gray-400 cursor-not-allowed',
          month: 'flex flex-col',
          months: 'flex flex-col relative',
          week: 'text-center h-[32px]',
          weekdays: 'text-sm font-semibold p-2 h-[32px]',
          day: 'text-sm p-2 rounded-lg ratio-1',
          selected: 'text-sm bg-primary-600 text-white rounded-lg',
          day_today: 'bg-accent text-accent-foreground',
          nav: 'flex items-center justify-between absolute w-full box-border p-[5px]',
          month_caption:
            'flex justify-center w-full p-[5px] box-border text-sm font-midium',
          ...classNames,
        }}
        components={{
          Chevron({ orientation }) {
            return orientation === 'left' ? <ButtonLeft /> : <ButtonRight />;
          },
        }}
        formatters={{
          formatWeekdayName: (day) =>
            day.toLocaleDateString('en-US', { weekday: 'short' }),
          formatCaption: (month) =>
            month.toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            }),
        }}
      />
    </>
  );
}
