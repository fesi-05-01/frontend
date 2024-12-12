import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { get } from '~/src/services/api';
import { type GetGatheringsResponse } from '~/src/services/gatherings/types';
import { wishListTypeAtom } from '~/src/stores/wishlist-atom';

export function useWishList() {
  const [type, setType] = useAtom(wishListTypeAtom);
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

  const { data } = useQuery({
    queryKey: ['gatherings', wishlist, type],
    queryFn: async () => {
      if (!wishlist.length) return [];

      const response = await get<GetGatheringsResponse>('/gatherings', {
        params: {
          id: wishlist.join(','),
          type,
        },
      });
      return response;
    },
    enabled: wishlist.length > 0,
  });

  return { type, setType, wishlist, data };
}
