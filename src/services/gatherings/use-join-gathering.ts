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
      toast.success('모임에 참여했습니다.');

      queryClient.invalidateQueries({ queryKey: ['gathering'] });
      queryClient.invalidateQueries({ queryKey: ['joinedGathering'] });
    },
    onError: (error) => {
      switch (error.data.code) {
        case 'GATHERING_CANCELED':
          toast.error('취소된 모임입니다.');
          break;
        case 'UNAUTHORIZED':
          toast.error('로그인이 필요합니다.');
          break;
        case 'NOT_FOUND':
          toast.error('모임을 찾을 수 없습니다.');
          break;
        default:
          toast.error('모임 참여에 실패했습니다.');
      }
    },
  });
}
