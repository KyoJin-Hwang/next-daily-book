'use client';

import Link from 'next/link';
import style from './Header.module.css';
import { usePathname } from 'next/navigation';
import { todayFuc } from '@/utils/date';
import { useEffect } from 'react';
import { useCategoryStore } from '@/stores/categoryStore';
import { useHover } from '@/hooks/useHover';

const Header = () => {
  const pathname = usePathname();
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  const color = useCategoryStore((state) => state.category.color);
  const backgroundColor = isHovered ? color : 'transparent';
  useEffect(() => {
    if (color === '') return handleMouseLeave;
  }, [color]);
  return (
    <div className={style.header}>
      <p>{todayFuc(1)}</p>
      {pathname !== '/' && (
        <Link
          href={'/'}
          className={`${style.headerLink}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor: backgroundColor,
            transition: 'all 0.3s ease',
          }}
        >
          뒤로가기
        </Link>
      )}
    </div>
  );
};

export default Header;
