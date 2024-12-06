import { fakerKO as faker } from '@faker-js/faker';

import { generateFakeUsers } from '~/src/mocks/faker/fake-user';

export default function makeFakeParticipants(
  gatheringId: number,
  count: number,
) {
  return Array.from({ length: count }, () => ({
    userId: faker.number.int({ min: 100, max: 999 }),
    gatheringId: gatheringId,
    joinedAt: faker.date.past().toISOString(),
    User: generateFakeUsers(1)[0],
  }));
}
