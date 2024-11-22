type DateFormatType = 1 | 2; // 타입을 별도로 정의

/**
 * 오늘 날짜를 특정 형식으로 반환하는 함수
 *
 * `type 1: "2024. 11. 22"`
 *
 * `type 2: "2024-11-22"`
 * @param {Object} param - 함수에 전달되는 객체
 * @param {DateFormatType} param.type - 반환할 날짜 형식을 지정하는 타입 (1 또는 2)
 * @returns {string} - 포맷된 날짜 문자열
 */
export const todayFuc = (type: DateFormatType): string => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString('ko-KR'); // 예: "2024. 11. 22"

  if (type === 1) return formattedDate;
  else
    return formattedDate
      .replaceAll('.', '-')
      .replace(/ /g, '')
      .replace(/-$/, '');
};

/**
 * 마지막으로 열린 날짜를 확인하고, 오늘 날짜와 비교하는 함수
 *
 * @returns 날짜 상태 boolean
 */

export const checkIfOpenToday = (): boolean => {
  const lastOpenedDate = localStorage.getItem('lastOpenedDate');
  const today = todayFuc(2);
  if (lastOpenedDate !== today) {
    // 날짜가 다르면 상태를 false로 설정
    return false;
  }
  return true; // 동일하면 상태는 true
};
