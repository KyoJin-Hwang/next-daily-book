'use client';
import style from './KakaoButton.module.css';
declare global {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  interface Window {
    Kakao: any;
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const KakaoButton = ({ url }: { url: string }) => {
  const shareToKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      }
      console.log(kakao);
      kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '오늘의 책님',
          description: '궁금한 것을 질문하고, 오늘의 답변을 얻어 보세요!',
          imageUrl:
            'https://raw.githubusercontent.com/KyoJin-Hwang/next-daily-book/refs/heads/main/public/images/%EC%98%A4%EB%8A%98%EC%9D%98%EC%B1%85%EB%8B%98.png', // 공유할 이미지 URL
          link: {
            mobileWebUrl: url, // 현재 페이지 URL을 공유
            webUrl: url,
          },
        },
        buttons: [
          {
            title: '결과 보기',
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    }
  };

  return (
    <div id="kakaotalk-sharing-btn" className={style.kakaoBtn_container}>
      <a className={style.kakaoBtn_a}>
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
          className={style.kakaoBtn_img}
          onClick={shareToKakao}
        />
      </a>
    </div>
  );
};

export default KakaoButton;
