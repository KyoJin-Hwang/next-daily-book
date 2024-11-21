'use client'; // 클라이언트 전용 코드 실행

import { useState } from 'react';

import styles from './Book.module.css';
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
    <div className={styles.container}>
      <div
        className={`${styles.book} ${isClicked ? styles.open : ''}`}
        onClick={handleClick}
      >
        <div className={`${styles.cover} book-font`}>
          <span>🌞</span>
          <span>오늘의 책님</span>
        </div>
        <div className={styles.pages}>
          <div
            className={`${styles.page} ${isClicked ? styles.pageOpened : ''}`}
          >
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
