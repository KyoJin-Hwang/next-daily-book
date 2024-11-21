'use client'; // 클라이언트 전용 코드 실행

import { useState } from 'react';

import style from './Book.module.css';
import ThemeSwitcher from '@/components/Common/ThemeSwitcher/ThemeSwitcher';
import Footer from '@/components/Common/Footer/Footer';
import Header from '@/components/Common/Header/Header';

const Book = ({ children }: { children: React.ReactNode }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    }
  };
  return (
    <div className={style.container}>
      <div
        className={`${style.book} ${isClicked ? style.open : ''}`}
        onClick={handleClick}
      >
        <div className={`${style.cover} book-font`}>
          <span>🌞</span>
          <span>오늘의 책님</span>
        </div>
        <div className={style.pages}>
          <div className={`${style.page} ${isClicked ? style.pageOpened : ''}`}>
            <Header />
            {children}
            <Footer />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
