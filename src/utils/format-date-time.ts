import { parseISO } from 'date-fns';

export default function formatDateTime(dateTime: string): {
  date: string;
  time: string;
} {
  let normalizedDateTime = dateTime;
  const [datePart, timePart] = dateTime.split('T');

  if (timePart.includes('Z')) {
    normalizedDateTime = `${datePart}T${timePart.replace('Z', '+09:00')}`;
  } else if (!timePart.includes('+') && !timePart.includes('-')) {
    normalizedDateTime = `${dateTime}+09:00`;
  }

  const parsedDate = parseISO(normalizedDateTime);

  const month = parsedDate.getMonth() + 1;
  const day = parsedDate.getDate();
  const hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();

  const date = `${month}월 ${day}일`;
  const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return { date, time };
}
