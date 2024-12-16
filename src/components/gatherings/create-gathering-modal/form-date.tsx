'use client';

import { type ComponentPropsWithoutRef } from 'react';
import { type ControllerRenderProps } from 'react-hook-form';

import CalendarIcon from '~/src/assets/icons/calendar.svg';
import Calender from '~/src/components/common/calender';
import { FormItem, FormLabel } from '~/src/components/common/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/src/components/common/pop-over';
import { ScrollArea } from '~/src/components/common/scroll-area';
import { type CreateGatheringForm } from '~/src/components/gatherings/create-gathering-modal/schema';
import { cn } from '~/src/utils/class-name';
import { getDateForFormData } from '~/src/utils/date';

interface Props {
  label: string;
  type: 'gathering' | 'registration';
  field: ControllerRenderProps<CreateGatheringForm, 'date'>;
}

export default function FormDate({ label, type, field }: Props) {
  const selectedDate = field.value[type];

  const now = new Date();
  const nowTime = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentAmPm = nowTime >= 12 ? 'PM' : 'AM';

  const isToday = selectedDate?.date?.toDateString() === now.toDateString();
  const isFinishedSelect =
    selectedDate?.date &&
    selectedDate?.hour !== undefined &&
    selectedDate?.minutes !== undefined &&
    selectedDate?.ampm;

  // 시간 비활성화 체크 함수
  const isHourDisabled = (hour: number) => {
    if (!isToday) return false;

    const isAMSelected = selectedDate?.ampm === 'AM';
    const isPMNow = currentAmPm === 'PM';

    if (isAMSelected && isPMNow) return true;

    return (
      selectedDate?.ampm === currentAmPm &&
      (currentAmPm === 'PM'
        ? hour === 12 || hour < (nowTime % 12 || 12)
        : hour < nowTime)
    );
  };

  // 분 비활성화 체크 함수
  const isMinutesDisabled = (minutes: number) => {
    if (!isToday) return false;

    const isAMSelected = selectedDate?.ampm === 'AM';
    const isPMNow = currentAmPm === 'PM';

    if (isAMSelected && isPMNow) return true;

    return (
      selectedDate?.ampm === currentAmPm &&
      selectedDate?.hour === (nowTime % 12 || 12) &&
      minutes <= currentMinutes
    );
  };

  const handleTimeSelect = (value: number, timeType: 'hour' | 'minutes') => {
    field.onChange({
      ...field.value,
      [type]: { ...field.value[type], [timeType]: value },
    });
  };

  return (
    <FormItem className="w-full">
      <FormLabel>{label}</FormLabel>

      <Popover>
        <PopoverTrigger asChild>
          <div
            className={cn(
              'flex w-full cursor-pointer items-center justify-between rounded-xl bg-secondary-50 px-4 font-medium text-secondary-400',
              'h-10 text-sm tablet:h-11 tablet:text-base',
            )}
          >
            <span>
              {isFinishedSelect
                ? `${getDateForFormData(selectedDate.date)} ${selectedDate.hour}:${selectedDate.minutes.toString().padStart(2, '0')} ${selectedDate.ampm}`
                : '날짜를 선택해주세요'}
            </span>
            <CalendarIcon />
          </div>
        </PopoverTrigger>

        <PopoverContent className="flex w-fit divide-x divide-secondary-200">
          <Calender
            mode="single"
            selected={field.value[type]?.date}
            onSelect={(date) =>
              field.onChange({
                ...field.value,
                [type]: { date },
              })
            }
            disabled={(date) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              return date < today;
            }}
            className="mr-4"
          />

          <div className="flex max-h-[240px] *:px-2.5">
            <ScrollArea>
              {AMPM.map((ampm) => (
                <TimePicker
                  key={ampm}
                  selected={selectedDate?.ampm === ampm}
                  onClick={() =>
                    field.onChange({
                      ...field.value,
                      [type]: { date: selectedDate!.date, ampm },
                    })
                  }
                >
                  {ampm}
                </TimePicker>
              ))}
            </ScrollArea>

            <ScrollArea>
              {HOUR.map((hour) => (
                <TimePicker
                  key={hour}
                  selected={selectedDate?.hour === hour}
                  onClick={() => handleTimeSelect(hour, 'hour')}
                  disabled={isHourDisabled(hour)}
                >
                  {hour.toString().padStart(2, '0')}
                </TimePicker>
              ))}
            </ScrollArea>

            <ScrollArea>
              {MINUTES.map((minutes) => (
                <TimePicker
                  key={minutes}
                  selected={selectedDate?.minutes === minutes}
                  onClick={() => handleTimeSelect(minutes, 'minutes')}
                  disabled={isMinutesDisabled(minutes)}
                >
                  {minutes.toString().padStart(2, '0')}
                </TimePicker>
              ))}
            </ScrollArea>
          </div>
        </PopoverContent>
      </Popover>
    </FormItem>
  );
}

const AMPM = ['AM', 'PM'];
const HOUR = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const MINUTES = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

interface TimePickerProps extends ComponentPropsWithoutRef<'button'> {
  selected: boolean;
}

function TimePicker({
  children,
  disabled,
  className,
  selected,
  ...props
}: TimePickerProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        'flex h-[33px] w-[42px] items-center justify-center rounded-lg text-sm disabled:text-secondary-400',
        selected && 'bg-primary-500 text-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
