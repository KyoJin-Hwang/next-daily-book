'use client'; // 클라이언트 전용 코드 실행

import { useState } from 'react';

import styles from './book.module.css';

const HomeBook = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // isClicked가 false일 때만 상태를 변경하도록 조건 추가
    if (!isClicked) {
      setIsClicked(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.book} onClick={handleClick}>
        <div
          className={`${styles.cover} ${isClicked ? styles.clicked : ''} book-font`}
        >
          <span>🌞</span>
          <span>오늘의 책님</span>
        </div>
        <div className={styles.pages}>
          <div
            className={`${styles.page} ${isClicked ? styles.pageOpened : ''}`}
          >
            Page 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBook;
