import { type ControllerRenderProps } from 'react-hook-form';
import * as Dropdown from '@radix-ui/react-dropdown-menu';

import CaretDownIcon from '~/src/assets/icons/caret-down.svg';
import { FormItem, FormLabel } from '~/src/components/common/form';
import { type CreateGatheringForm } from '~/src/components/gatherings/create-gathering-modal/schema';
import { cn } from '~/src/utils/class-name';

interface Props {
  field: ControllerRenderProps<CreateGatheringForm, 'location'>;
}

export default function FormLocation({ field }: Props) {
  return (
    <FormItem>
      <FormLabel>장소</FormLabel>

      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <div
            className={cn(
              'flex w-full cursor-pointer items-center justify-between rounded-xl bg-secondary-50 px-4 font-medium text-secondary-400',
              'h-10 text-sm tablet:h-11 tablet:text-base',
              field.value && 'text-secondary-800',
            )}
          >
            <span>{field.value || '장소를 선택해주세요'}</span>
            <CaretDownIcon />
          </div>
        </Dropdown.Trigger>

        <Dropdown.Portal>
          <Dropdown.Content
            className={cn(
              'z-50 w-[var(--radix-dropdown-menu-trigger-width)] space-y-1 rounded-xl bg-white p-1 font-medium shadow-xl',
              'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
              'text-sm tablet:text-base',
            )}
          >
            {['건대입구', '을지로3가', '신림', '홍대입구'].map((location) => (
              <Dropdown.Item
                key={location}
                className="cursor-pointer rounded-xl px-3 py-1.5 focus:bg-primary-100"
                onClick={() => field.onChange(location)}
              >
                {location}
              </Dropdown.Item>
            ))}
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </FormItem>
  );
}
