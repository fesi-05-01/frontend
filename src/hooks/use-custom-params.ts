import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

type Params = Record<string, string | undefined>;

/**
 * URL 검색 파라미터를 관리하기 위한 커스텀 훅
 */
export default function useCustomParams() {
  const searchParams = useSearchParams();

  /**
   * 지정된 키들에 대한 파라미터 값들을 객체로 반환하는 함수
   * @param {string[]} keys - 가져올 파라미터 키들의 배열
   * @returns {Params} 키-값 쌍으로 이루어진 파라미터 객체
   */
  const getParams = useCallback(
    (keys: string[]): Params =>
      keys.reduce(
        (acc, key) => ({ ...acc, [key]: searchParams.get(key) || undefined }),
        {},
      ),
    [searchParams],
  );

  /**
   * 새로운 URL을 생성하는 함수
   * @param {string} path - 기본 경로
   * @param {Partial<Params>} newParams - 추가할 새로운 파라미터들
   * @returns {string} 생성된 URL 문자열
   */
  const createUrl = useCallback((path: string, newParams: Partial<Params>) => {
    const urlParams = new URLSearchParams();

    Object.entries(newParams).forEach(([key, value]) => {
      if (value) urlParams.set(key, value);
    });

    return `${path}?${urlParams.toString()}`;
  }, []);

  return { getParams, createUrl };
}
