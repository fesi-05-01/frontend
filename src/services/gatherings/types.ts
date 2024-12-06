import {
  type GatheringLocation,
  type GatheringType,
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

export interface JoinedGathering {
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
