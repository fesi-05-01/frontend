import { type GetJoinedGatheringsRequest } from '~/src/services/mypage/types';

export const gatheringsQueryKeys = {
  joinedInfiniteList: (params?: GetJoinedGatheringsRequest, id?: number) =>
    ['joinedInfiniteList', params, id] as const,
};
