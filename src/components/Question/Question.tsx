'use client';

import { useCategoryStore } from '@/stores/categoryStore';
import QuestionInput from '../Common/QuestionInput/QuestionInput';
import QuestionResult from '../Common/QuestionResult/QuestionResult';

const Question = () => {
  const result = useCategoryStore((state) => state.answers.question);
  const updateAnswer = useCategoryStore((state) => state.updateAnswer);

  return !result ? (
    <QuestionInput title="질문" update={updateAnswer} />
  ) : (
    <QuestionResult result={result} />
  );
};

export default Question;
