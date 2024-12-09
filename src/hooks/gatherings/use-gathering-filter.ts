'use client';

import { useAtom } from 'jotai';

import { gatheringTypeAtom } from '~/src/stores/gathering-filter-atom';

export function useGatheringFilter() {
  const [type, setType] = useAtom(gatheringTypeAtom);
  return { type, setType };
}
