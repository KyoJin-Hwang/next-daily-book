'use client';

import { useCategoryStore } from '@/stores/categoryStore';

import TextInput from '../TextInput/TextInput';
import TextResult from '../TextResult/TextResult';

import { getAnswerForText } from '@/utils/answer';

const TextAll = ({
  type,
  title,
  resultID,
}: {
  type: 1 | 2 | 3;
  title: string;
  resultID: number;
}) => {
  const updateAnswer = useCategoryStore((state) => state.updateAnswer);
  const updateQuestion = useCategoryStore((state) => state.updateQuestion);

  return !resultID ? (
    <TextInput title={title} update1={updateAnswer} update2={updateQuestion} />
  ) : (
    <TextResult result={getAnswerForText(type, resultID)} />
  );
};

export default TextAll;
