'use client';

import { useCategoryStore } from '@/stores/categoryStore';

const Answer = () => {
  const questionAnswer = useCategoryStore((state) => state.answers.question);
  const loveAnswer = useCategoryStore((state) => state.answers.love);
  const foodAnswer = useCategoryStore((state) => state.answers.food);

  return (
    <div>
      <ul>
        <li>{questionAnswer || '질문에 대한 답변이 없습니다.'}</li>
        <li>{loveAnswer || '사랑에 대한 답변이 없습니다.'}</li>
        <li>{foodAnswer || '음식에 대한 답변이 없습니다.'}</li>
      </ul>
    </div>
  );
};

export default Answer;
