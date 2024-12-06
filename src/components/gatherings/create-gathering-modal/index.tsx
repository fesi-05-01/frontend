'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '~/src/components/common/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
} from '~/src/components/common/form';
import Input from '~/src/components/common/input';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import useCreateGathering from '~/src/services/gatherings/use-create-gathering';
import { cn } from '~/src/utils/class-name';

export default function CreateGatheringModal() {
  const [open, setOpen] = useState(false);

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
        handleOpenChange(false);
      },
    });
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) reset();
    setOpen(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-[115px]">모임 만들기</Button>
      </DialogTrigger>

      <DialogContent
        aria-describedby="모임 만들기 폼"
        className={cn(
          'flex h-dvh flex-col tablet:h-[calc(100dvh-48px)] desktop:h-dvh',
          'max-tablet:max-w-full max-tablet:rounded-none max-tablet:px-4 max-tablet:pb-3',
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
    </Dialog>
  );
}
