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

  // 시간 부분에서만 시간대 정보를 찾도록 수정
  const timezonePart = dateTime.split('T')[1];
  const hasTimezoneInfo =
    timezonePart.includes('Z') ||
    timezonePart.includes('+') ||
    timezonePart.includes('-');

  if (!hasTimezoneInfo) {
    console.log('Entering no timezone info branch');
    parsedDate = new Date(
      parsedDate.getFullYear(),
      parsedDate.getMonth(),
      parsedDate.getDate(),
      parsedDate.getHours(),
      parsedDate.getMinutes(),
    );
  } else {
    parsedDate = toZonedTime(parsedDate, timeZone);
  }

  const month = parsedDate.getMonth() + 1;
  const day = parsedDate.getDate();
  const hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();

  const date = `${month}월 ${day}일`;
  const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return { date, time };
}
