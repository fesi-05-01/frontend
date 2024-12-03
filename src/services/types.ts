export type SortOrder = 'asc' | 'desc';

export type GatheringType =
  | 'DALLAEMFIT'
  | 'OFFICE_STRETCHING'
  | 'MINDFULNESS'
  | 'WORKATION';

export type GatheringLocation = '건대입구' | '을지로3가' | '신림' | '홍대입구';

export interface PageParam {
  limit: number;
  offset: number;
}
