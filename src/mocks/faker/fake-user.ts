import { fakerKO as faker } from '@faker-js/faker';

import { type User } from '~/src/services/gatherings/types';

export function generateFakeUsers(count: number): User[] {
  return Array.from({ length: count }, () => ({
    id: faker.number.int({ min: 1, max: 10000 }),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    companyName: faker.company.name(),
    image: `https://picsum.photos/100`,
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
  }));
}
