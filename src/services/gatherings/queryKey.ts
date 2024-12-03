import { type GetGatheringDetailRequest } from '~/src/services/gatherings/types';

export const gatheringsQueryKeys = {
  gatheringDetail: (params: GetGatheringDetailRequest) =>
    ['gatheringDetail', params] as const,
};
