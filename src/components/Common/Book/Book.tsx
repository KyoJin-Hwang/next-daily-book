'use client';

import style from './Book.module.css';
import Footer from '@/components/Common/Footer/Footer';
import Header from '@/components/Common/Header/Header';
import { useBookOpenStore } from '@/stores/bookOpenStore';
import { useEffect } from 'react';
import { useCategoryStore } from '@/stores/categoryStore';
import { checkIfOpenToday } from '@/utils/date';

const Book = ({ children }: { children: React.ReactNode }) => {
  const isOpen = useBookOpenStore((state) => state.isOpen);
  const setOpen = useBookOpenStore((state) => state.setOpen);
  const initializeOpenState = useBookOpenStore(
    (state) => state.initializeOpenState,
  );

  const removeAnswer = useCategoryStore((state) => state.removeAnswer);
  const removeCategory = useCategoryStore((state) => state.removeCategory);
  const removeQuestion = useCategoryStore((state) => state.removeQuestion);

  useEffect(() => {
    initializeOpenState();
  }, [initializeOpenState]);
  useEffect(() => {
    if (!isOpen && !checkIfOpenToday()) {
      removeAnswer();
      removeCategory();
      removeQuestion();
    }
  }, [isOpen]);

  return (
    <div className={style.container}>
      <div
        className={`${style.book} ${isOpen ? style.open : ''}`}
        onClick={setOpen}
      >
        <div className={`${style.cover} book-font`}>
          <span>🌞</span>
          <span>오늘의 책님</span>
        </div>
        <div className={style.pages}>
          <div className={`${style.page} ${isOpen ? style.pageOpened : ''}`}>
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
