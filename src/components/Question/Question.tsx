'use client';

import { useCategoryStore } from '@/stores/categoryStore';
import QuestionInput from '../Common/QuestionInput/QuestionInput';
import QuestionResult from '../Common/QuestionResult/QuestionResult';
import { getAnswerForText } from '@/utils/answer';

const Question = () => {
  const resultID = useCategoryStore((state) => state.answers.question);
  const updateAnswer = useCategoryStore((state) => state.updateAnswer);

  return !resultID ? (
    <QuestionInput title="질문" update={updateAnswer} />
  ) : (
    <QuestionResult result={getAnswerForText(1, resultID)} />
  );
};

export default Question;
