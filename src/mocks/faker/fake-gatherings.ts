import { fakerKO as faker } from '@faker-js/faker';

import {
  type GatheringLocation,
  type GatheringType,
} from '~/src/services/types';

export default function makeFakeGatherings(count: number, id?: number) {
  return Array.from({ length: count }, () => ({
    id: id ?? faker.number.int({ min: 1, max: 9999 }), // id가 주어지지 않으면 1~9999 범위에서 생성
    type: faker.helpers.arrayElement<GatheringType>([
      'DALLAEMFIT',
      'OFFICE_STRETCHING',
      'MINDFULNESS',
      'WORKATION',
    ]),
    name: faker.company.name(),
    dateTime:
      faker.helpers.maybe(
        () => faker.date.future({ years: 1 }).toISOString(), // 미래 날짜
        { probability: 0.7 }, // 70% 확률로 미래 날짜
      ) ?? faker.date.past({ years: 1 }).toISOString(), // 나머지는 과거 날짜
    registrationEnd:
      faker.helpers.maybe(
        () => faker.date.soon({ days: 28 }).toISOString(), // 가까운 미래 날짜
        { probability: 0.8 }, // 80% 확률로 마감 전
      ) ?? faker.date.past({ years: 1 }).toISOString(), // 나머지는 이미 마감된 날짜
    location: faker.helpers.arrayElement<GatheringLocation>([
      '건대입구',
      '을지로3가',
      '신림',
      '홍대입구',
    ]),
    participantCount: faker.number.int({ min: 1, max: 50 }),
    capacity: faker.number.int({ min: 10, max: 50 }),
    image: `https://picsum.photos/400`,
    createdBy: faker.number.int({ min: 1, max: 1000 }),
    canceledAt:
      faker.helpers.maybe(() => faker.date.past().toISOString(), {
        probability: 0.3,
      }) ?? null,
  }));
}
