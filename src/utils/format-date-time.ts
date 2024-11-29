export default function formatDateTime(dateTime: string): {
  date: string;
  time: string;
} {
  const dateObj = new Date(dateTime);

  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  // "1월 7일" 형식으로 변환
  const date = `${month}월 ${day}일`;

  // "17:00" 형식으로 변환
  const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return { date, time };
}
