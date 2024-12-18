export default function formatDateTime(dateTime: string): {
  date: string;
  time: string;
} {
  // 시간 부분만 추출
  const match = dateTime.match(/T(\d{2}):(\d{2})/);
  if (!match) throw new Error('Invalid date time format');

  const hours = match[1];
  const minutes = match[2];

  // 날짜 부분 추출
  const [, month, day] = dateTime.split('T')[0].split('-');

  return {
    date: `${Number(month)}월 ${Number(day)}일`,
    time: `${hours}:${minutes}`,
  };
}
