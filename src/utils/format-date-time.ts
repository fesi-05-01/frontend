// dateTime 형식: "2024-12-15T12:00:00.000Z"
// 한국 시간대로 변환 후 date와 time 형식 변환

export default function formatDateTime(dateTime: string): {
  date: string;
  time: string;
} {
  // 한국 시간대로 변환
  const dateObj = new Date(dateTime); // dateTime을 Date 객체로 변환

  // 한국 시간으로 변환하기 위해 UTC 시간에 9시간을 더함
  const koreaTimeOffset = 9 * 60; // 9시간을 분으로 변환
  const localDateObj = new Date(
    dateObj.getTime() + koreaTimeOffset * 60 * 1000,
  );

  const month = localDateObj.getUTCMonth() + 1;
  const day = localDateObj.getUTCDate();
  const hours = localDateObj.getUTCHours();
  const minutes = localDateObj.getUTCMinutes();

  // "1월 7일" 형식으로 변환
  const date = `${month}월 ${day}일`;

  // "17:00" 형식으로 변환
  const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return { date, time };
}
