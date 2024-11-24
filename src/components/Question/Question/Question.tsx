'use client';

import { useCategoryStore } from '@/stores/categoryStore';
import QuestionInput from '../QuestionInput/QuestionInput';
import QuestionResult from '../QuestionResult/QuestionResult';

const Question = () => {
  const categoryID = useCategoryStore((state) => state.category.id);
  const result = useCategoryStore((state) => state.answers.question);
  return <>{categoryID && result ? <QuestionResult /> : <QuestionInput />}</>;
};

export default Question;
