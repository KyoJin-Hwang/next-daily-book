'use client';

import { useCategoryStore } from '@/stores/categoryStore';

import TextInput from '../Common/Text/TextInput/TextInput';
import TextResult from '../Common/Text/TextResult/TextResult';

import { getAnswerForText } from '@/utils/answer';

const Question = () => {
  const resultID = useCategoryStore((state) => state.answers.question);

  const updateAnswer = useCategoryStore((state) => state.updateAnswer);
  const updateQuestion = useCategoryStore((state) => state.updateQuestion);

  return !resultID ? (
    <TextInput title="질문" update1={updateAnswer} update2={updateQuestion} />
  ) : (
    <TextResult result={getAnswerForText(1, resultID)} />
  );
};

export default Question;
