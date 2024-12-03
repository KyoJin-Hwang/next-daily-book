'use client';

import { useCategoryStore } from '@/stores/categoryStore';
import QuestionInput from '../Common/QuestionInput/QuestionInput';
import QuestionResult from '../Common/QuestionResult/QuestionResult';
import { getAnswerForText } from '@/utils/answer';

const Question = () => {
  const resultID = useCategoryStore((state) => state.answers.question);

  const updateAnswer = useCategoryStore((state) => state.updateAnswer);
  const updateQuestion = useCategoryStore((state) => state.updateQuestion);

  return !resultID ? (
    <QuestionInput
      title="질문"
      update1={updateAnswer}
      update2={updateQuestion}
    />
  ) : (
    <QuestionResult result={getAnswerForText(1, resultID)} />
  );
};

export default Question;
