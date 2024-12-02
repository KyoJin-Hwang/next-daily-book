'use client';
import Link from 'next/link';
import style from './HomeMenu.module.css';
import { useCategoryStore } from '@/stores/categoryStore';

const categories = [
  { name: 'question', id: 1, label: '오늘의 질문', color: '#aee2f2' },
  { name: 'love', id: 2, label: '오늘의 연애', color: '#f28f8f' },
  { name: 'food', id: 3, label: '오늘의 음식', color: '#b89ae7' },
  { name: 'answer', id: 4, label: '오늘의 답변', color: '#ffb34d' },
];

const HomeMenu = () => {
  const selectCategory = useCategoryStore((state) => state.selectCategory);

  return (
    <div className={style.container}>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/${category.name}`}
          onClick={() =>
            selectCategory({
              name: category.name,
              id: category.id,
              color: category.color,
            })
          }
        >
          <div className={style.box}>{category.label}</div>
        </Link>
      ))}
    </div>
  );
};

export default HomeMenu;
