import { atom } from 'jotai';

import { type GatheringType } from '~/src/services/types';

export const gatheringTypeAtom = atom<GatheringType>('DALLAEMFIT');
