import { API_URL } from '~/src/services/api';

/**
 * API_URL을 기준으로 상대 URL을 절대 URL로 변환합니다.
 * @param url - 변환할 상대 URL
 * @returns 절대 URL 문자열
 */
export const baseUrl = (url: string) => {
  return (API_URL + url).toString();
};

/**
 * URL에서 지정된 쿼리 파라미터들의 값을 추출합니다.
 * @param requestUrl - 쿼리 파라미터를 추출할 URL
 * @param queries - 추출할 쿼리 파라미터 이름들의 배열 (`as const` 필요)
 * @returns 쿼리 파라미터 이름을 키로, 해당 값을 값으로 가지는 객체
 * @example
 * const params = getQueryParams("http://example.com?type=test&id=123", ["type", "id"] as const);
 * // 결과: { type: string | null, id: string | null }
 *
 * // 타입 추론을 위해서는 as const가 필요합니다
 * params.type   // 자동완성 가능
 * params.id     // 자동완성 가능
 */
export const getQueryParams = <T extends readonly string[]>(
  requestUrl: string,
  queries: T,
) => {
  const url = new URL(requestUrl);

  return queries.reduce(
    (acc: { [K in T[number]]: string | null }, query: T[number]) => {
      acc[query] = url.searchParams.get(query);
      return acc;
    },
    {} as { [K in T[number]]: string | null },
  );
};
