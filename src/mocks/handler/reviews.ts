import { http, HttpResponse } from 'msw';

import { baseUrl, getQueryParams } from '~/src/mocks/utils';

export const reviewsHandlers = [
  http.get(baseUrl('/reviews'), ({ request }) => {
    const { limit, offset } = getQueryParams(request.url, [
      'limit',
      'offset',
    ] as const);

    const baseReviews = [
      {
        teamId: 1,
        id: 1,
        score: 4,
        comment: '멤버들과 좋은 시간을 보냈습니다. 다음에도 참여하고 싶네요!',
        createdAt: '2024-03-20T09:00:00Z',
        Gathering: {
          teamId: 1,
          id: 101,
          type: 'DALLAEMFIT',
          name: '달램핏 오피스 스트레칭',
          dateTime: '2024-03-19T15:00:00Z',
          location: '건대입구',
          image: '/IMG_1053.jpg',
        },
        User: {
          teamId: 1,
          id: 201,
          name: '김철수',
          image: '/IMG_1190.jpg',
        },
      },
      {
        teamId: 1,
        id: 2,
        score: 5,
        comment: '정말 유익한 모임이었습니다! 강사님도 친절하시고 좋았어요',
        createdAt: '2024-03-19T14:30:00Z',
        Gathering: {
          teamId: 1,
          id: 102,
          type: 'MINDFULNESS',
          name: '마인드풀니스 명상 클래스',
          dateTime: '2024-03-18T13:00:00Z',
          location: '을지로3가',
          image: '/IMG_1190.jpg',
        },
        User: {
          teamId: 1,
          id: 202,
          name: '이영희',
          image: '/IMG_1053.jpg',
        },
      },
    ];

    const reviews = Array.from({ length: 13 }, (_, index) => {
      const multiplier = index * 2;
      return [
        {
          ...baseReviews[0],
          id: multiplier + 1,
          User: {
            ...baseReviews[0].User,
            id: baseReviews[0].User.id + multiplier,
          },
          Gathering: {
            ...baseReviews[0].Gathering,
            id: baseReviews[0].Gathering.id + multiplier,
          },
        },
        {
          ...baseReviews[1],
          id: multiplier + 2,
          User: {
            ...baseReviews[1].User,
            id: baseReviews[1].User.id + multiplier,
          },
          Gathering: {
            ...baseReviews[1].Gathering,
            id: baseReviews[1].Gathering.id + multiplier,
          },
        },
      ];
    }).flat();

    const parsedOffset = offset ? parseInt(offset) : 0;
    const parsedLimit = limit ? parseInt(limit) : 10;
    const paginatedReviews = reviews.slice(
      parsedOffset,
      parsedOffset + parsedLimit,
    );

    return HttpResponse.json({
      data: paginatedReviews,
      totalItemCount: reviews.length,
      currentPage: Math.floor(parsedOffset / parsedLimit) + 1,
      totalPages: Math.ceil(reviews.length / parsedLimit),
    });
  }),

  http.get(baseUrl('/reviews/scores'), ({ request }) => {
    const { type } = getQueryParams(request.url, ['type'] as const);

    return HttpResponse.json([
      {
        teamId: 'fesi0501',
        type,
        averageScore: 4.2,
        oneStar: 2,
        twoStars: 3,
        threeStars: 8,
        fourStars: 15,
        fiveStars: 12,
      },
    ]);
  }),
];
