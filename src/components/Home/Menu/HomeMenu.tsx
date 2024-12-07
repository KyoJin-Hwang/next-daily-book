'use client';
import Link from 'next/link';
import style from './HomeMenu.module.css';
import { useCategoryStore } from '@/stores/categoryStore';

const HomeMenu = () => {
  const selectCategory = useCategoryStore((state) => state.selectCategory);
  const againAnswer = useCategoryStore((state) => state.againAnswer);
  const questionID = useCategoryStore((state) => state.answers.question);
  const loveID = useCategoryStore((state) => state.answers.love);
  const foodID = useCategoryStore((state) => state.answers.food);
  const questionText = useCategoryStore((state) => state.questions);

  const data = [
    { id: questionID, text: questionText.question || '아직 질문이 없습니다.' },
    { id: loveID, text: questionText.love || '아직 질문이 없습니다.' },
    { id: foodID },
  ];

  const searchParams = encodeURIComponent(JSON.stringify(data));
  const categories = [
    { name: 'question', id: 1, label: '오늘의 질문', color: '#aee2f2' },
    { name: 'love', id: 2, label: '오늘의 연애', color: '#f28f8f' },
    { name: 'food', id: 3, label: '오늘의 음식', color: '#b89ae7' },
    {
      name: `answer?search=${searchParams}`,
      id: 4,
      label: '오늘의 답변',
      color: '#ffb34d',
    },
  ];

  return (
    <div className={style.container}>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/${category.name}`}
          onClick={() => {
            if (category.name === 'food') {
              selectCategory({
                name: category.name,
                id: category.id,
                color: category.color,
              });
              if (foodID >= 0) againAnswer();
            } else {
              selectCategory({
                name: category.name,
                id: category.id,
                color: category.color,
              });
            }
          }}
        >
          <div className={style.box}>{category.label}</div>
        </Link>
      ))}
    </div>
  );
};

export default HomeMenu;
