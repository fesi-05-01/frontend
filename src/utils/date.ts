/**
 * 날짜와 시간을 'YYYY-MM-DDTHH:00:00' 형식의 문자열로 변환합니다.
 * @param {Date} date - 변환할 날짜 객체
 * @param {number} time - 시간 (0-23)
 * @returns {string} 'YYYY-MM-DDTHH:00:00' 형식의 날짜/시간 문자열
 * @example
 * getDateForFormData(new Date('2024-12-05'), 15)
 * // returns '2024-12-05T15:00:00'
 */
export const getDateForFormData = (date: Date, time: number) => {
  const formattedDate = date.toISOString().split('T')[0];
  const formattedTime = time.toString().padStart(2, '0');

  return `${formattedDate}T${formattedTime}:00:00`;
};
