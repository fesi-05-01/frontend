'use client';

import { useAtom } from 'jotai';

import {
  gatheringDateAtom,
  gatheringLocationAtom,
  gatheringSortByAtom,
  gatheringTypeAtom,
} from '~/src/stores/gathering-filter-atom';

export function useGatheringFilter() {
  const [type, setType] = useAtom(gatheringTypeAtom || 'DALLAEMFIT');
  const [location, setLocation] = useAtom(gatheringLocationAtom);
  const [date, setDate] = useAtom(gatheringDateAtom);
  const [sortBy, setSortBy] = useAtom(gatheringSortByAtom || 'registrationEnd');

  return {
    type,
    setType,
    location,
    setLocation,
    date,
    setDate,
    sortBy,
    setSortBy,
  };
}
