'use client';

import Link from 'next/link';
import style from './Header.module.css';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname(); // 현재 경로 가져오기
  const date = new Date();
  const formattedDate = date.toLocaleDateString('ko-KR'); // 'YYYY-MM-DD' 형식

  return (
    <div className={style.header}>
      <p>{formattedDate}</p>
      {pathname !== '/' && (
        <Link href={'/'} className={`${style.headerLink}`}>
          뒤로가기
        </Link>
      )}
    </div>
  );
};

export default Header;
