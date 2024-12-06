'use client';

import { useCategoryStore } from '@/stores/categoryStore';

import TextAll from '../Common/Text/TextAll/TextAll';

const Question = () => {
  const id = useCategoryStore((state) => state.answers.question);
  return <TextAll type={1} title="질문" resultID={id} />;
};

export default Question;
