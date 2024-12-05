import {
  type GatheringLocation,
  type GatheringType,
} from '~/src/services/types';

export interface Gathering {
  id: number;
  teamId?: string;
  type?: GatheringType;
  name?: string;
  dateTime?: string;
  registrationEnd?: string;
  location?: GatheringLocation;
  participantCount?: number;
  capacity?: number;
  image?: string;
  createdBy?: number;
  canceledAt?: string | null;
}

export interface CreateGatheringResponse {
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
}
