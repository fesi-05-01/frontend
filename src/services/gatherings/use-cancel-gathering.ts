import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { put } from '~/src/services/api';
import { type ErrorResponseData } from '~/src/services/auths/types';
import { gatheringsQueryKeys } from '~/src/services/gatherings/queryKey';
import { type JoinedGathering } from '~/src/services/gatherings/types';

export function useCancelGathering() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation<JoinedGathering, ErrorResponseData, number>({
    mutationFn: (gatheringId: number) =>
      put<JoinedGathering>(`/gatherings/${gatheringId}/cancel`),
    onSuccess: (_data, gatheringId) => {
      toast.success('모임이 취소되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['joinedGathering'] });
      queryClient.invalidateQueries({
        queryKey: gatheringsQueryKeys.gatheringParticipants({ gatheringId }),
      });

      queryClient.invalidateQueries({
        queryKey: gatheringsQueryKeys.gatheringDetail({ id: gatheringId }),
      });
      router.push('/');
    },
    onError: (error) => {
      console.log(error);
      toast.error('모임 취소에 실패했습니다.');
    },
  });
}
