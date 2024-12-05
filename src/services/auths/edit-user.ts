import { useMutation } from '@tanstack/react-query';

import { put } from '~/src/services/api';
import {
  type ErrorResponseData,
  type SuccessResponseData,
  type UserEditType,
} from '~/src/services/auths/types';

export function useEditUser() {
  return useMutation<SuccessResponseData, ErrorResponseData, UserEditType>({
    mutationFn: (data) => {
      return put<SuccessResponseData>('/auths/user', {
        companyName: data?.companyName,
        // image: data?.image,
      });
    },
    onSuccess: () => {
      alert('수정완');
    },
    onError: (error) => {
      console.error(error);
      alert('오류');
    },
  });
}
