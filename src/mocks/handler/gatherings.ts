import { http, HttpResponse } from 'msw';

import makeFakeParticipants from '~/src/mocks/faker/fake-gathering-participants';
import makeFakeGatherings from '~/src/mocks/faker/fake-gatherings';
import { baseUrl } from '~/src/mocks/utils';
import { type GatheringType } from '~/src/services/types';

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
    const gathering = makeFakeGatherings(1, Number(id));
    if (!gathering) {
      return HttpResponse.json(
        { error: `Gathering with ID ${id} not found` },
        { status: 404 },
      );
    }
    return HttpResponse.json(gathering);
  }),

  // 전체 모임
  http.get(baseUrl(`/gatherings`), ({ request }) => {
    const url = new URL(request.url);
    const type = url.searchParams.get('type') as GatheringType;
    const offset = Number(url.searchParams.get('offset')) || 0;
    const limit = Number(url.searchParams.get('limit')) || 10;

    const gatherings = Array.from(
      { length: limit },
      (_, i) => makeFakeGatherings(1, offset + i + 1, type)[0],
    );

    if (type) {
      return HttpResponse.json(
        gatherings.filter((gathering) => gathering.type === type),
      );
    }

    return HttpResponse.json(gatherings);
  }),
];
