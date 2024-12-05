import {
  type GetGatheringDetailRequest,
  type GetGatheringParticipantsRequest,
  type GetGatheringReviewRequest,
} from '~/src/services/gatherings/types';

export const gatheringsQueryKeys = {
  gatheringDetail: (params: GetGatheringDetailRequest) =>
    ['gatheringDetail', params] as const,
  gatheringParticipants: (params: GetGatheringParticipantsRequest) =>
    ['gatheringParticipants', params] as const,
  gatheringReview: (params: GetGatheringReviewRequest) =>
    ['gatheringReview', params] as const,
};
