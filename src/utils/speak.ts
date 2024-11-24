/**
 *
 * 음성호출함수
 * @returns
 */

export const speakOnce = (text: string) => {
  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };
  if (isMobile()) {
    // 모바일 환경일 때 음성을 비활성화
    console.log('모바일에서는 음성을 실행하지 않습니다.');
    return;
  }

  const post = `${text}`;
  const voiceObj = new SpeechSynthesisUtterance(post);

  voiceObj.rate = 0.9;
  voiceObj.pitch = 0.5;

  // 음성 합성이 진행 중일 때 중복 호출을 방지
  if (window.speechSynthesis.speaking) {
    return;
  }

  // 음성이 끝난 후 새로운 음성을 실행하도록 설정
  voiceObj.onend = () => {
    console.log('음성이 끝났습니다.');
  };

  window.speechSynthesis.speak(voiceObj);
};
