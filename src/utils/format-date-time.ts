/**
 * dateTime 형식이 "2024-12-15T12:00:00.000Z" 일 때도 있고
 * "2024-12-15T12:00:00" 일 때도 있는 것 같은데
 * 후자처럼 시간대 정보가 없으면 한국 시간대라고 간주하고
 * 전자처럼 시간대 정보가 있으면 한국 시간대로 변환
 * 그 후에 date와 time 형식 분리
 */

import { parseISO } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export default function formatDateTime(dateTime: string): {
  date: string;
  time: string;
} {
  const timeZone = 'Asia/Seoul';
  let parsedDate = parseISO(dateTime);

  // dateTime에 시간대 정보가 없을 경우 한국 시간대로 간주
  if (
    !dateTime.includes('Z') &&
    !dateTime.includes('+') &&
    !dateTime.includes('-')
  ) {
    parsedDate = new Date(`${dateTime}Z`); // 한국 시간대로 간주하여 UTC로 변환
  }

  const localDateObj = toZonedTime(parsedDate, timeZone);

  const month = localDateObj.getMonth() + 1;
  const day = localDateObj.getDate();
  const hours = localDateObj.getHours();
  const minutes = localDateObj.getMinutes();

  // "1월 7일" 형식으로 변환
  const date = `${month}월 ${day}일`;

  // "17:00" 형식으로 변환
  const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return { date, time };
}
