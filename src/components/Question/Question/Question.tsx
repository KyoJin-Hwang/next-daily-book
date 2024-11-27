'use client';

import { useCategoryStore } from '@/stores/categoryStore';
import QuestionInput from '../QuestionInput/QuestionInput';
import QuestionResult from '../QuestionResult/QuestionResult';

const Question = () => {
  const { id: categoryID } = useCategoryStore((state) => state.category);
  const result = useCategoryStore((state) => state.answers.question);

  return !categoryID || !result ? <QuestionInput /> : <QuestionResult />;
};

export default Question;
