import { http, HttpResponse } from 'msw';

import makeFakeParticipants from '~/src/mocks/faker/fake-gathering-participants';
import makeFakeGathering from '~/src/mocks/faker/fake-gatherings';
import { baseUrl } from '~/src/mocks/utils';

export const gatheringsHandlers = [
  http.get(baseUrl(`/gatherings/:id/participants`), (req) => {
    const { id } = req.params;
    // 아 참가자 수를 못 가져오네
    const participants = makeFakeParticipants(Number(id), 10);
    return HttpResponse.json(participants);
  }),

  // 특정 Gathering 상세정보 API
  http.get(baseUrl(`/gatherings/:id`), (req) => {
    const { id } = req.params;
    const gathering = makeFakeGathering(1, Number(id));
    if (!gathering) {
      return HttpResponse.json(
        { error: `Gathering with ID ${id} not found` },
        { status: 404 },
      );
    }
    return HttpResponse.json(gathering);
  }),

  // 전체 모임 (수정 필요)
  http.get(baseUrl(`/gatherings`), () => {
    console.log('Success');
    return HttpResponse.json({ message: 'Success' });
  }),
];
