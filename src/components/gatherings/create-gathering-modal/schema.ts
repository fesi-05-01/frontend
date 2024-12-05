import { File } from '@web-std/file';
import { z } from 'zod';

export const createGatheringSchema = z.object({
  location: z.enum(['건대입구', '을지로3가', '신림', '홍대입구']),
  image: z.instanceof(File),
  type: z.enum(['OFFICE_STRETCHING', 'MINDFULNESS', 'WORKATION']),
  day: z.object({
    date: z.date(),
    time: z.number(),
  }),
  capacity: z
    .string()
    .refine((value) => !isNaN(Number(value)), {
      message: '숫자만 입력 가능합니다.',
    })
    .refine((value) => Number(value) >= 5, {
      message: '최소 5인 이상 입력해주세요.',
    }),
});

export type CreateGatheringForm = z.infer<typeof createGatheringSchema>;
