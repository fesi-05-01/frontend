import { type GetJoinedGatheringsRequest } from '~/src/services/mypage/types';

export const gatheringsQueryKeys = {
  joinedInfiniteList: (params?: GetJoinedGatheringsRequest) =>
    ['joinedInfiniteList', params] as const,
};
