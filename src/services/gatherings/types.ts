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
  joinedAt?: string | null; // ISO 8601 날짜 문자열
  isCompleted?: boolean;
  isReviewed?: boolean;
}
