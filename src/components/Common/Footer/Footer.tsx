'use client';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import style from './Footer.module.css';
const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div>
        <p className={style.footerP_top}>재미로만 즐겨주세요...😅</p>
        <p className={style.footerP_bottom}>
          created by <span className={style.footerSpan}>Owen</span>
        </p>
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default Footer;
