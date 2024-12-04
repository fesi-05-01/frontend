import { authsHandlers } from '~/src/mocks/handler/auths';
import { gatheringsHandlers } from '~/src/mocks/handler/gatherings';
import { reviewsHandlers } from '~/src/mocks/handler/reviews';

export const handlers = [
  ...authsHandlers,
  ...gatheringsHandlers,
  ...reviewsHandlers,
];
