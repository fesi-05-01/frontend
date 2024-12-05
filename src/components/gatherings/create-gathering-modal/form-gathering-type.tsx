import { type ControllerRenderProps } from 'react-hook-form';

import BoxSelect from '~/src/components/common/box-select';
import { FormItem, FormLabel } from '~/src/components/common/form';
import { type CreateGatheringForm } from '~/src/components/gatherings/create-gathering-modal/schema';
import { type GatheringType } from '~/src/services/types';

const TYPE: Record<
  Extract<GatheringType, 'OFFICE_STRETCHING' | 'MINDFULNESS' | 'WORKATION'>,
  { title: string; desc?: string }
> = {
  OFFICE_STRETCHING: { title: '달램핏', desc: '오피스 스트레칭' },
  MINDFULNESS: { title: '달램핏', desc: '마인드풀니스' },
  WORKATION: { title: '워케이션' },
};

interface Props {
  field: ControllerRenderProps<CreateGatheringForm, 'type'>;
}

export default function FormGatheringType({ field }: Props) {
  return (
    <FormItem>
      <FormLabel>선택 서비스</FormLabel>

      <div className="flex gap-2">
        {Object.entries(TYPE).map(([type, { title, desc }]) => (
          <BoxSelect
            key={type}
            title={title}
            description={desc || ''}
            checked={field.value === type}
            onChange={() => field.onChange(type)}
            className="w-full"
          />
        ))}
      </div>
    </FormItem>
  );
}
