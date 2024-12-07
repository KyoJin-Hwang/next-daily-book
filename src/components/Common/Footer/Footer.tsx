'use client';

import { useEffect, useState } from 'react';
import KakaoButton from '../Button/KakaoButton';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import style from './Footer.module.css';

import { usePathname } from 'next/navigation'; // useRouter 훅을 임포트

const Footer = () => {
  const [isAnswerPage, setIsAnswerPage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsAnswerPage(pathname === '/answer');
  }, [pathname]);

  return (
    <div className={style.footerContainer}>
      <div>
        <p className={style.footerP_top}>재미로만 즐겨주세요...😅</p>
        <p className={style.footerP_bottom}>
          created by <span className={style.footerSpan}>Owen</span>
        </p>
      </div>
      {isAnswerPage && <KakaoButton url={window.location.href} />}
      <ThemeSwitcher />
    </div>
  );
};

export default Footer;
