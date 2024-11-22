'use client';

import style from './Book.module.css';
import ThemeSwitcher from '@/components/Common/ThemeSwitcher/ThemeSwitcher';
import Footer from '@/components/Common/Footer/Footer';
import Header from '@/components/Common/Header/Header';
import { useBookOpenStore } from '@/stores/bookOpenStore';

const Book = ({ children }: { children: React.ReactNode }) => {
  const isOpen = useBookOpenStore((state) => state.isOpen);
  const setOpen = useBookOpenStore((state) => state.setOpen);
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
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
