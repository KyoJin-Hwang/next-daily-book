'use client';
import Link from 'next/link';
import style from './HomeMenu.module.css';

const HomeMenu = () => {
  return (
    <div className={style.container}>
      <Link href={'./answer'}>
        <div className={style.box}>오늘의 질문</div>
      </Link>
      <Link href={'./love'}>
        <div className={style.box}>오늘의 연애</div>
      </Link>
      <Link href={'./food'}>
        <div className={style.box}>오늘의 음식</div>
      </Link>
      <Link href={'./bet'}>
        <div className={style.box}>오늘의 내기</div>
      </Link>
    </div>
  );
};

export default HomeMenu;
