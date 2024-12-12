import { type ControllerRenderProps } from 'react-hook-form';

import ChipTime from '~/src/components/common/chip-time';
import { FormItem } from '~/src/components/common/form';
import { type CreateGatheringForm } from '~/src/components/gatherings/create-gathering-modal/schema';

const TIME: Record<string, number[]> = {
  오전: [9, 10, 11],
  오후: [12, 13, 14, 15, 16, 17, 18],
};

interface Props {
  field: ControllerRenderProps<CreateGatheringForm, 'day'>;
}

export default function FormHourPicker({ field }: Props) {
  const isToday = field.value.date.toDateString() === new Date().toDateString();
  const nowTime = new Date().getHours();

  return (
    <FormItem className="space-y-4 pt-4">
      {Object.keys(TIME).map((ampm, index) => (
        <div key={index} className="flex flex-col gap-2">
          {/* 오전, 오후 */}
          <span className="text-xs font-semibold text-secondary-800">
            {ampm}
          </span>

          {/* 시간 chip */}
          <div className="flex flex-row flex-wrap gap-2">
            {TIME[ampm].map((time) => (
              <ChipTime
                key={time}
                type="button"
                state={time === field.value.time ? 'active' : 'inactive'}
                disabled={isToday && time <= nowTime}
                onClick={() => field.onChange({ ...field.value, time })}
              >
                {`${time.toString().padStart(2, '0')}:00`}
              </ChipTime>
            ))}
          </div>
        </div>
      ))}
    </FormItem>
  );
}
