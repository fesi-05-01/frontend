import { useMutation } from '@tanstack/react-query';

import { type CreateGatheringForm } from '~/src/components/gatherings/create-gathering-modal/schema';
import { post } from '~/src/services/api';
import { type CreateGatheringResponse } from '~/src/services/gatherings/types';
import { getDateForFormData } from '~/src/utils/date';

export default function useCreateGathering() {
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
  });
}

const NAME = {
  OFFICE_STRETCHING: '달램핏 오피스 스트레칭',
  MINDFULNESS: '달램핏 마인드풀니스',
  WORKATION: '워케이션',
};
