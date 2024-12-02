'use client';

import { useCategoryStore } from '@/stores/categoryStore';
import style from './Answer.module.css';
const Answer = () => {
  const questionAnswer = useCategoryStore((state) => state.answers.question);
  const loveAnswer = useCategoryStore((state) => state.answers.love);
  const foodAnswer = useCategoryStore((state) => state.answers.food);

  return (
    <div className={style.answerContainer}>
      <p>오늘의 답변</p>
      <ul className={style.answerUl}>
        <li className={style.answerLi}>
          {questionAnswer || '질문에 대한 답변이 없습니다.'}
        </li>
        <li className={style.answerLi}>
          {loveAnswer || '사랑에 대한 답변이 없습니다.'}
        </li>
        <li className={style.answerLi}>
          {foodAnswer || '음식에 대한 답변이 없습니다.'}
        </li>
      </ul>
    </div>
  );
};

export default Answer;
