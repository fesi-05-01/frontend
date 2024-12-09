import { fakerKO as faker } from '@faker-js/faker';

import {
  type GatheringLocation,
  type GatheringType,
} from '~/src/services/types';

export default function makeFakeGatherings(
  count: number,
  id?: number,
  type?: GatheringType,
  location?: GatheringLocation,
  date?: string,
) {
  const capacity = faker.number.int({ min: 10, max: 50 });
  return Array.from({ length: count }, () => ({
    id: id ?? faker.number.int({ min: 1, max: 9999 }),
    type:
      type ??
      faker.helpers.arrayElement<GatheringType>([
        'DALLAEMFIT',
        'OFFICE_STRETCHING',
        'MINDFULNESS',
        'WORKATION',
      ]),
    name: faker.company.name(),
    dateTime: date
      ? `${date}T${faker.date.soon().toISOString().split('T')[1]}`
      : (faker.helpers.maybe(
          () => faker.date.future({ years: 1 }).toISOString(),
          {
            probability: 0.7,
          },
        ) ?? faker.date.past({ years: 1 }).toISOString()),
    registrationEnd:
      faker.helpers.maybe(() => faker.date.soon({ days: 28 }).toISOString(), {
        probability: 0.8,
      }) ?? faker.date.past({ years: 1 }).toISOString(),
    location:
      location ??
      faker.helpers.arrayElement<GatheringLocation>([
        '건대입구',
        '을지로3가',
        '신림',
        '홍대입구',
      ]),
    capacity,
    participantCount: faker.number.int({ min: 1, max: capacity }),
    image: `https://picsum.photos/400?random=${faker.number.int({ min: 1, max: 1000 })}`,
    createdBy: faker.number.int({ min: 1, max: 1000 }),
    canceledAt:
      faker.helpers.maybe(() => faker.date.past().toISOString(), {
        probability: 0.3,
      }) ?? null,
  }));
}
