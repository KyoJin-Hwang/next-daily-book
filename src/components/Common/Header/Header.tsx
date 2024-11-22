'use client';

import Link from 'next/link';
import style from './Header.module.css';
import { usePathname } from 'next/navigation';
import { todayFuc } from '@/utils/date';
import { useEffect, useState } from 'react';
import { useCategoryStore } from '@/stores/categoryStore';

const Header = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const remove = useCategoryStore((state) => state.removeCategory);
  const color = useCategoryStore((state) => state.category.color);

  useEffect(() => {
    if (color === '') return setIsHovered(false);
  }, [color]);
  return (
    <div className={style.header}>
      <p>{todayFuc(1)}</p>
      {pathname !== '/' && (
        <Link
          href={'/'}
          className={`${style.headerLink}`}
          onClick={remove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: isHovered ? color : 'transparent',
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
