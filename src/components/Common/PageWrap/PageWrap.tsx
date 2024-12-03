'use client';
import { useCategoryStore } from '@/stores/categoryStore';
import style from './PageWrap.module.css';
const PageWrap = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const color = useCategoryStore((state) => state.category.color);

  return (
    <div
      className={style.wrapContainer}
      style={{
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  );
};

export default PageWrap;
