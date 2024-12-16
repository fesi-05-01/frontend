import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { put } from '~/src/services/api';
import { type ErrorResponseData } from '~/src/services/auths/types';
import { type JoinedGathering } from '~/src/services/gatherings/types';

export function useCancelGathering() {
  const router = useRouter();
  return useMutation<JoinedGathering, ErrorResponseData, number>({
    mutationFn: (gatheringId: number) =>
      put<JoinedGathering>(`/gatherings/${gatheringId}/cancel`),
    onSuccess: () => {
      toast.success('모임이 취소되었습니다.');
      router.push('/');
    },
    onError: (error) => {
      console.log(error);
      toast.error('모임 취소에 실패했습니다.');
    },
  });
}
