/**
 * 날짜와 시간을 'YYYY-MM-DD' 또는 'YYYY-MM-DDTHH:mm:00' 형식의 문자열로 변환합니다.
 * @param {Date} date - 변환할 날짜 객체
 * @param {number} [hour] - 시간 (0-23)
 * @param {number} [minute] - 분 (0-59)
 * @returns {string} 날짜/시간 문자열
 * @example
 * // 시간과 분 포함
 * getDateForFormData(new Date('2024-12-05'), 15, 30)
 * // returns '2024-12-05T15:30:00'
 *
 * // 시간만 포함
 * getDateForFormData(new Date('2024-12-05'), 15)
 * // returns '2024-12-05T15:00:00'
 *
 * // 시간 미포함
 * getDateForFormData(new Date('2024-12-05'))
 * // returns '2024-12-05'
 */
export const getDateForFormData = (
  date: Date,
  hour?: number,
  minute?: number,
) => {
  // 시간 유효성 검사
  if (hour !== undefined) {
    if (hour < 0 || hour >= 24) {
      throw new Error('시간은 0-23 사이의 값이어야 합니다.');
    }
  }

  // 분 유효성 검사
  if (minute !== undefined) {
    if (minute < 0 || minute >= 60) {
      throw new Error('분은 0-59 사이의 값이어야 합니다.');
    }
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  if (hour !== undefined) {
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinute = (minute || 0).toString().padStart(2, '0');
    return `${formattedDate}T${formattedHour}:${formattedMinute}:00`;
  }

  return formattedDate;
};
