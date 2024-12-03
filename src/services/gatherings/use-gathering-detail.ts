import { useQuery } from '@tanstack/react-query';

import { get } from '~/src/services/api';
import { gatheringsQueryKeys } from '~/src/services/gatherings/queryKey';
import { type GetGatheringDetailResponse } from '~/src/services/gatherings/types';

export default function useGatheringDetail(id: number) {
  return useQuery({
    queryKey: gatheringsQueryKeys.gatheringDetail({ id }),
    queryFn: () => {
      return get<GetGatheringDetailResponse>(`/gatherings`, { params: { id } });
    },
  });
}
