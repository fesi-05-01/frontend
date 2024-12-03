import {
  type GatheringLocation,
  type GatheringType,
} from '~/src/services/types';

export type Gathering = Partial<GetGatheringDetailResponse>;

export interface GetGatheringDetailRequest {
  id: number;
}

export interface GetGatheringDetailResponse {
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
  canceledAt: string | null;
}
