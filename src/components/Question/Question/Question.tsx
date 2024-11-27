'use client';

import { useCategoryStore } from '@/stores/categoryStore';
import QuestionInput from '../QuestionInput/QuestionInput';
import QuestionResult from '../QuestionResult/QuestionResult';

const Question = () => {
  const result = useCategoryStore((state) => state.answers.question);

  return !result ? <QuestionInput /> : <QuestionResult />;
};

export default Question;
