import { atom } from 'jotai';

export const activeTabAtom = atom<'myGroups' | 'myReviews' | 'createdGroups'>(
  'myGroups',
);
export const reviewSubTabAtom = atom<'writableReviews' | 'writtenReviews'>(
  'writableReviews',
);
