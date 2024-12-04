import {
  type GatheringLocation,
  type GatheringType,
  type PageParam,
} from '~/src/services/types';

export interface Gathering {
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

export interface GetGatheringDetailRequest {
  id: number;
}

export type GetGatheringDetailResponse = Gathering[];

export interface GetGatheringParticipantsRequest extends Partial<PageParam> {
  gatheringId: number;
}

export type GetGatheringParticipantsResponse = GatheringParticipant[];

interface User {
  id: number;
  email: string;
  name: string;
  companyName: string;
  image: string | null;
}

interface GatheringParticipant {
  teamId: string;
  userId: number;
  gatheringId: number;
  joinedAt: string;
  User: User;
}
