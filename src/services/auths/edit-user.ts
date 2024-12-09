import { useMutation } from '@tanstack/react-query';

import { put } from '~/src/services/api';
import {
  type ErrorResponseData,
  type SuccessResponseData,
} from '~/src/services/auths/types';

export function useEditUser() {
  return useMutation<SuccessResponseData, ErrorResponseData, FormData>({
    mutationFn: (formData: FormData) => {
      return put<SuccessResponseData>('/auths/user', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    onSuccess: (data) => {
      alert('수정완료');
      console.log('수정완료', data);
    },
    onError: (error) => {
      console.error(error);
      alert('오류 발생');
    },
  });
}
