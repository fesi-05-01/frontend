import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { type CreateGatheringForm } from '~/src/components/gatherings/create-gathering-modal/schema';
import { post } from '~/src/services/api';
import { type CreateGatheringResponse } from '~/src/services/gatherings/types';
import { type GatheringType } from '~/src/services/types';
import { getDateForFormData } from '~/src/utils/date';

export default function useCreateGathering() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (form: CreateGatheringForm) => {
      const { location, type, day, image, capacity } = form;

      const formData = new FormData();
      formData.append('location', location);
      formData.append('type', type);
      formData.append('name', NAME[type]);
      formData.append('dateTime', getDateForFormData(day.date, day.time));
      formData.append('capacity', capacity);
      formData.append('image', image);

      return post<CreateGatheringResponse>(`/gatherings`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    onSuccess: (_, request) => {
      toast.success('모임이 생성되었습니다.');

      // post 요청 후 쿼리 무효화
      // 해당하는 타입만 최신화 하도록 작성
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => {
          if (queryKey[0] !== 'gatherings') return false;

          const { type } = queryKey[1] as { type?: GatheringType };

          if (
            request.type === 'MINDFULNESS' ||
            request.type === 'OFFICE_STRETCHING'
          ) {
            return type === request.type || type === 'DALLAEMFIT';
          }

          return type === request.type;
        },
      });
    },
  });
}

const NAME = {
  OFFICE_STRETCHING: '달램핏 오피스 스트레칭',
  MINDFULNESS: '달램핏 마인드풀니스',
  WORKATION: '워케이션',
};
