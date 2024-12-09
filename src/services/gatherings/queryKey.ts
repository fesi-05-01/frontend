import { type GatheringType } from '~/src/services/types';

export const gatheringsQueryKeys = {
  gatherings: (params?: { type?: GatheringType }) => ['gatherings', params],
  gatheringDetail: (params: { id: number }) => ['gathering', params],
  gatheringParticipants: (params: { gatheringId: number }) => [
    'gathering',
    'participants',
    params,
  ],
  gatheringReview: (params: { gatheringId: number }) => [
    'gathering',
    'review',
    params,
  ],
} as const;
