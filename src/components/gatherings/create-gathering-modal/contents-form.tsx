'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import Button from '~/src/components/common/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from '~/src/components/common/form';
import Input from '~/src/components/common/input';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '~/src/components/common/modal';
import { ScrollArea } from '~/src/components/common/scroll-area';
import FormCalendar from '~/src/components/gatherings/create-gathering-modal/form-calendar';
import FormGatheringType from '~/src/components/gatherings/create-gathering-modal/form-gathering-type';
import FormHourPicker from '~/src/components/gatherings/create-gathering-modal/form-hour-picker';
import FormImage from '~/src/components/gatherings/create-gathering-modal/form-image';
import FormLocation from '~/src/components/gatherings/create-gathering-modal/form-location';
import {
  type CreateGatheringForm,
  createGatheringSchema,
} from '~/src/components/gatherings/create-gathering-modal/schema';
import useCustomParams from '~/src/hooks/use-custom-params';
import useCreateGathering from '~/src/services/gatherings/use-create-gathering';
import { cn } from '~/src/utils/class-name';

interface Props {
  onOpenChange: (open: boolean) => void;
}

export default function ContentsForm({ onOpenChange }: Props) {
  const router = useRouter();

  const { getParams } = useCustomParams();
  const params = getParams(['open']);

  const form = useForm<CreateGatheringForm>({
    resolver: zodResolver(createGatheringSchema),
    defaultValues: {
      day: {
        date: new Date(),
        time: undefined,
      },
      capacity: '',
    },
  });

  const { control, formState, handleSubmit: onSubmit, reset } = form;
  const { isDirty, isValid, isSubmitting } = formState;

  const { mutate: createGathering, isPending } = useCreateGathering();

  const handleSubmit = (form: CreateGatheringForm) => {
    createGathering(form, {
      onSuccess: () => {
        toast.success('모임이 생성되었습니다.');
        reset();
        onOpenChange(false);
      },
    });
  };

  useEffect(() => {
    if (params.open === 'true') {
      router.replace('/gatherings');
      onOpenChange(true);
    }
  }, [params, router, onOpenChange]);

  return (
    <DialogContent
      aria-describedby="모임 만들기 폼"
      className={cn(
        'flex h-dvh flex-col tablet:h-[calc(100dvh-48px)] desktop:h-dvh',
        'w-full max-tablet:rounded-none max-tablet:px-4 max-tablet:pb-3',
      )}
    >
      <DialogHeader>
        <DialogTitle>모임 만들기</DialogTitle>
      </DialogHeader>

      <ScrollArea className="grow">
        <Form {...form}>
          <form
            id="create-gathering-form"
            onSubmit={onSubmit(handleSubmit)}
            className="space-y-6 pb-6"
          >
            {/* 장소 폼 */}
            <FormField
              control={control}
              name="location"
              render={({ field }) => <FormLocation field={field} />}
            />

            {/* 이미지 폼 */}
            <FormField
              control={control}
              name="image"
              render={({ field }) => <FormImage field={field} />}
            />

            {/* 모임 타입 폼 */}
            <FormField
              control={control}
              name="type"
              render={({ field }) => <FormGatheringType field={field} />}
            />

            {/* 날짜 폼 */}
            <div>
              <FormField
                control={control}
                name="day"
                render={({ field }) => <FormCalendar field={field} />}
              />

              <FormField
                control={control}
                name="day"
                render={({ field }) => <FormHourPicker field={field} />}
              />
            </div>

            {/* 모집 정원 폼 */}
            <FormField
              control={control}
              name="capacity"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel>모집 정원</FormLabel>
                  <Input
                    placeholder="최소 5인 이상 입력해주세요."
                    error={formState.errors.capacity?.message}
                    {...field}
                  />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </ScrollArea>

      {/* 확인 버튼 */}
      <DialogFooter>
        <Button
          type="submit"
          form="create-gathering-form"
          size="small"
          disabled={!isDirty || !isValid || isSubmitting || isPending}
        >
          확인
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
