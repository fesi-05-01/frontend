/**
 * 날짜와 시간을 'YYYY-MM-DD' 또는 'YYYY-MM-DDTHH:00:00' 형식의 문자열로 변환합니다.
 * @param {Date} date - 변환할 날짜 객체
 * @param {number} [time] - 시간 (0-23)
 * @returns {string} 날짜/시간 문자열
 * @example
 * // 시간 포함
 * getDateForFormData(new Date('2024-12-05'), 15)
 * // returns '2024-12-05T15:00:00'
 *
 * // 시간 미포함
 * getDateForFormData(new Date('2024-12-05'))
 * // returns '2024-12-05'
 */
export const getDateForFormData = (date: Date, time?: number) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  if (time) {
    const formattedTime = time.toString().padStart(2, '0');
    return `${formattedDate}T${formattedTime}:00:00`;
  }

  return formattedDate;
};
