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
  const [fileSize, setFileSize] = useState('');

  return (
    <FormItem>
      <FormLabel>이미지</FormLabel>

      <label
        className={cn(
          'grid cursor-pointer grid-cols-[auto_80px] items-center gap-3 text-sm font-medium',
          'h-10 text-sm tablet:h-11 tablet:text-base',
        )}
        htmlFor="gathering-image"
      >
        <div
          className={cn(
            'flex h-full min-w-0 items-center rounded-xl bg-secondary-50 px-4 text-secondary-400',
            fileName && 'text-secondary-800',
          )}
        >
          {field.value ? (
            <>
              <span className="block truncate">{fileName}</span>
              <span>{`(${fileSize}MB)`}</span>
            </>
          ) : (
            '이미지를 첨부해주세요'
          )}
        </div>

        <div className="flex h-full items-center justify-center rounded-xl border border-primary-600 text-primary-600 tablet:h-11">
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
          field.onChange(file);

          setFileName(file ? file.name : '');
          setFileSize(file ? (file.size / (1024 * 1024)).toFixed(2) : '');
        }}
      />
    </FormItem>
  );
}
