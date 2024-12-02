type DateFormatType = 1 | 2; // 타입을 별도로 정의

/**
 * 오늘 날짜를 특정 형식으로 반환하는 함수
 *
 * `type 1: "2024. 11. 22."`
 *
 * `type 2: "2024-11-22"`
 * @param {Object} param - 함수에 전달되는 객체
 * @param {DateFormatType} param.type - 반환할 날짜 형식을 지정하는 타입 (1 또는 2)
 * @returns {string} - 포맷된 날짜 문자열
 */
export const todayFuc = (type: DateFormatType): string => {
  const date = new Date();

  // 연, 월, 일 추출
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0'); // 앞에 '0'을 추가

  if (type === 1) {
    return `${year}. ${month}. ${day}`;
  } else {
    return `${year}-${month}-${day}`;
  }
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
    return false;
  }

  return true;
};
