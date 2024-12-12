import { z } from 'zod';

export const createReviewSchema = z.object({
  score: z.number().min(1).max(5),
  comment: z.string().trim().min(1),
});

export type CreateReviewForm = z.infer<typeof createReviewSchema>;
