'use client'; // 클라이언트 전용 코드 실행

import { useState } from 'react';

import styles from './Book.module.css';
import ThemeSwitcher from '@/components/Common/ThemeSwitcher/ThemeSwitcher';
import { useTheme } from 'next-themes';

const Book = ({ children }: { children: React.ReactNode }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { setTheme } = useTheme();

  const handleClick = () => {
    // isClicked가 false일 때만 상태를 변경하도록 조건 추가
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
          <span onClick={() => setTheme('dark')}>🌞</span>
          <span>오늘의 책님</span>
        </div>
        <div className={styles.pages}>
          <div
            className={`${styles.page} ${isClicked ? styles.pageOpened : ''}`}
          >
            <ThemeSwitcher />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
