export interface Gathering {
  id: number;
  teamId?: string;
  type?: string; // GatheringType 머지 받은 후에 수정
  name?: string;
  dateTime?: string; // 이거 date랑 time으로 분리 가공 필요
  date?: string;
  time?: string;
  registrationEnd?: string;
  location?: string; // GatheringLocation
  participantCount?: number;
  capacity?: number;
  image?: string;
  createdBy?: number;
  canceledAt?: string | null;
}
