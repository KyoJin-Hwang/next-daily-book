/**
 * #### 모바일 여부 확인하는 함수
 *
 * @returns {boolean}
 */

export const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);
