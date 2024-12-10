import {
  type GatheringLocation,
  type GatheringType,
  type PageParam,
  type SortOrder,
} from '~/src/services/types';

export type ReviewSortBy = 'createdAt' | 'score' | 'participantCount';

export interface CreateReviewRequest {
  gatheringId: number;
  score: number;
  comment: string;
}

export interface CreateReviewResponse {
  teamId: string;
  id: number;
  userId: number;
  gatheringId: number;
  score: number;
  comment: string;
  createdAt: string;
}

export type GetReviewListRequest = Partial<
  {
    gatheringId: number;
    userId: number;
    type: GatheringType;
    location: GatheringLocation;
    date: string;
    registrationEnd: string;
    sortBy: ReviewSortBy;
    sortOrder: SortOrder;
  } & PageParam
>;

export type GetReviewListResponse = Array<{
  teamId: string;
  id: number;
  score: number;
  comment: string;
  createdAt: string;
  Gathering: {
    teamId: string;
    id: number;
    type: string;
    name: string;
    dateTime: string;
    location: string;
    image: string;
  };
  User: {
    teamId: string;
    id: number;
    name: string;
    image: string;
  };
}>;

export type GetReviewScoreRequest = Partial<{
  gatheringId: string;
  type: GatheringType;
}>;

export type GetReviewScoreResponse = [
  {
    teamId: string;
    gatheringId: number;
    type: GatheringType;
    averageScore: number;
    oneStar: number;
    twoStars: number;
    threeStars: number;
    fourStars: number;
    fiveStars: number;
  },
];
