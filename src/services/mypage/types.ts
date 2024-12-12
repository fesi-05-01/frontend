import {
  type GatheringLocation,
  type GatheringType,
  type PageParam,
  type SortOrder,
} from '~/src/services/types';

export interface GetJoinedGatheringsRequest extends Partial<PageParam> {
  isCompleted?: boolean;
  isReviewed?: boolean;
  createdby?: number;
  sortOrder?: SortOrder;
}

export type GetJoinedGatheringsResponse = Array<{
  teamId: string;
  id: number;
  type: GatheringType;
  name: string;
  dateTime: string;
  registrationEnd: string;
  location: GatheringLocation;
  participantCount: number;
  capacity: number;
  image: string;
  createdBy: number;
  canceledAt?: string | null;
  joinedAt: string;
  isCompleted: boolean;
  isReviewed: boolean;
}>;
