import { http, HttpResponse } from 'msw';

import reviewJSON from '~/src/mocks/handler/reviews.json';
import { baseUrl, getQueryParams } from '~/src/mocks/utils';

export const reviewsHandlers = [
  http.get(baseUrl('/reviews'), ({ request }) => {
    const { offset, limit, type, location, date, sortBy } = getQueryParams(
      request.url,
      ['offset', 'limit', 'type', 'location', 'date', 'sortBy'] as const,
    );

    const rawData = reviewJSON;
    const { data } = rawData;

    // 필터링 적용
    const filteredData = {
      ...rawData,
      data: data.filter((review) => {
        const typeMatch = type
          ? type === 'DALLAEMFIT'
            ? ['OFFICE_STRETCHING', 'MINDFULNESS'].includes(
                review.Gathering.type,
              )
            : review.Gathering.type === type
          : true;
        const locationMatch = location
          ? review.Gathering.location === location
          : true;
        const dateMatch = date ? review.createdAt.split('T')[0] === date : true;

        return typeMatch && locationMatch && dateMatch;
      }),
    };

    // 정렬 적용
    if (sortBy) {
      const participantCounts = filteredData.data.reduce(
        (acc, review) => {
          const gatheringId = review.Gathering.id;
          acc[gatheringId] = (acc[gatheringId] || 0) + 1;
          return acc;
        },
        {} as Record<number, number>,
      );

      filteredData.data.sort((a, b) => {
        switch (sortBy) {
          case 'createdAt':
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          case 'score':
            return b.score - a.score;
          case 'participantCount':
            return (
              participantCounts[b.Gathering.id] -
              participantCounts[a.Gathering.id]
            );
          default:
            return 0;
        }
      });
    }

    const slicedData = filteredData.data.slice(
      Number(offset),
      Number(offset) + Number(limit),
    );

    const slicedTotalItemCount = filteredData.data.length;

    return HttpResponse.json({
      data: slicedData,
      totalItemCount: slicedTotalItemCount,
      currentPage: Math.floor(Number(offset) / Number(limit)) + 1,
      totalPages: Math.ceil(slicedTotalItemCount / Number(limit)),
    });
  }),

  http.get(baseUrl('/reviews/scores'), ({ request }) => {
    const { type } = getQueryParams(request.url, ['type'] as const);

    const rawData = reviewJSON;
    const { data } = rawData;

    // 필터링 적용
    const filteredData = {
      ...rawData,
      data: data.filter((review) => {
        const typeMatch = type
          ? type === 'DALLAEMFIT'
            ? ['DALLAEMFIT', 'OFFICE_STRETCHING', 'MINDFULNESS'].includes(
                review.Gathering.type,
              )
            : review.Gathering.type === type
          : true;

        return typeMatch;
      }),
    };

    // 필터링된 데이터에서 별점 통계 계산
    const scoreStats = filteredData.data.reduce(
      (acc, review) => {
        switch (review.score) {
          case 1:
            acc.oneStar++;
            break;
          case 2:
            acc.twoStars++;
            break;
          case 3:
            acc.threeStars++;
            break;
          case 4:
            acc.fourStars++;
            break;
          case 5:
            acc.fiveStars++;
            break;
        }
        return acc;
      },
      {
        oneStar: 0,
        twoStars: 0,
        threeStars: 0,
        fourStars: 0,
        fiveStars: 0,
      },
    );

    // 평균 점수 계산
    const totalScore = filteredData.data.reduce(
      (sum, review) => sum + review.score,
      0,
    );
    const averageScore =
      filteredData.data.length > 0 ? totalScore / filteredData.data.length : 0;

    return HttpResponse.json([
      {
        teamId: 'fesi0501',
        type,
        averageScore: Number(averageScore.toFixed(1)),
        ...scoreStats,
      },
    ]);
  }),
];
