import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { post } from '~/src/services/api';
import { type ErrorResponseData } from '~/src/services/auths/types';
import { type JoinedGathering } from '~/src/services/gatherings/types';

export function useJoinGathering() {
  const queryClient = useQueryClient();
  return useMutation<JoinedGathering, ErrorResponseData, number>({
    mutationFn: (gatheringId: number) =>
      post<JoinedGathering>(`/gatherings/${gatheringId}/join`),
    onSuccess: () => {
      toast.success('모임에 성공적으로 참여했습니다.');
      queryClient.invalidateQueries();
    },
    onError: () => {
      toast.error('모임 참여에 실패했습니다.');
    },
  });
}
