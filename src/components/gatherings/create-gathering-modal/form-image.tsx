import { useState } from 'react';
import { type ControllerRenderProps } from 'react-hook-form';

import { FormItem, FormLabel } from '~/src/components/common/form';
import { type CreateGatheringForm } from '~/src/components/gatherings/create-gathering-modal/schema';
import { cn } from '~/src/utils/class-name';

interface Props {
  field: ControllerRenderProps<CreateGatheringForm, 'image'>;
}

export default function FormImage({ field }: Props) {
  const [fileName, setFileName] = useState('');

  return (
    <FormItem>
      <FormLabel>이미지</FormLabel>

      <label
        className="flex cursor-pointer items-center gap-3 text-sm font-medium"
        htmlFor="gathering-image"
      >
        <div
          className={cn(
            'flex h-10 grow items-center rounded-xl bg-secondary-50 pl-4 text-secondary-400',
            fileName && 'text-secondary-800',
          )}
        >
          {fileName || '이미지를 첨부해주세요'}
        </div>
        <div className="flex h-10 w-[80px] items-center justify-center rounded-xl border border-primary-600 text-primary-600">
          파일 찾기
        </div>
      </label>

      <input
        id="gathering-image"
        hidden
        type="file"
        accept="image/*"
        multiple={false}
        onChange={(e) => {
          const file = e.target.files?.[0];
          const fileSize = file ? (file.size / (1024 * 1024)).toFixed(2) : '';

          field.onChange(file);
          setFileName(file ? `${file.name} (${fileSize}MB)` : '');
        }}
      />
    </FormItem>
  );
}
