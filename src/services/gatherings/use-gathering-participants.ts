import { useQuery } from '@tanstack/react-query';

import { get } from '~/src/services/api';
import { gatheringsQueryKeys } from '~/src/services/gatherings/queryKey';
import { type GetGatheringParticipantsResponse } from '~/src/services/gatherings/types';

export default function useGatheringParticipants(gatheringId: number) {
  return useQuery({
    queryKey: gatheringsQueryKeys.gatheringParticipants({
      gatheringId: gatheringId,
    }),
    queryFn: () => {
      return get<GetGatheringParticipantsResponse>(
        `/gatherings/${gatheringId}/participants`,
      );
    },
  });
}
