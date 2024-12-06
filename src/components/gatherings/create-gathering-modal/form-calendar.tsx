import { type ControllerRenderProps } from 'react-hook-form';

import Calender from '~/src/components/common/calender';
import { FormItem, FormLabel } from '~/src/components/common/form';
import { type CreateGatheringForm } from '~/src/components/gatherings/create-gathering-modal/schema';

interface Props {
  field: ControllerRenderProps<CreateGatheringForm, 'day'>;
}

export default function FormCalendar({ field }: Props) {
  return (
    <FormItem>
      <FormLabel htmlFor="date">날짜</FormLabel>

      <div className="flex items-center justify-center rounded-xl border border-secondary-200 p-2.5 pb-4">
        <Calender
          mode="single"
          selected={field.value.date}
          onSelect={(date) => field.onChange({ date, time: null })}
          disabled={(date) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return date < today;
          }}
          className="w-[250px]"
        />
      </div>
    </FormItem>
  );
}
