import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { del } from '~/src/services/api';
import { type ErrorResponseData } from '~/src/services/auths/types';
import { type JoinedGathering } from '~/src/services/gatherings/types';

export function useLeaveGathering() {
  const queryClient = useQueryClient();
  return useMutation<JoinedGathering, ErrorResponseData, number>({
    mutationFn: (gatheringId: number) =>
      del<JoinedGathering>(`/gatherings/${gatheringId}/leave`),
    onSuccess: (data) => {
      console.log(data);
      toast.success('모임 참여를 취소했습니다.');
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.log(error);
      toast.error('모임 참여 취소에 실패했습니다.');
    },
  });
}
