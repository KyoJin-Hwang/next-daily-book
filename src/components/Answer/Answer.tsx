'use client';

import { useSearchParams } from 'next/navigation';
import style from './Answer.module.css';
import { getAnswerForText } from '@/utils/answer';

const AnswerMessaage = ({
  title,
  result,
}: {
  title: string;
  result: string | undefined;
}) => {
  return (
    <>
      <p className={style.messageTitle}>{title}</p>
      <p className={`${style.messageAnswer} book-font`}>
        {result || '아직 답변이 없습니다.'}
      </p>
    </>
  );
};
const Answer = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('search');
  const questionID = search?.split(',')[0] || 0;
  const loveID = search?.split(',')[1] || 0;
  const foodID = search?.split(',')[2] || 0;

  return (
    <div className={style.answerContainer}>
      <p className={style.answerTitle}>오늘의 답변</p>
      <ul className={style.answerUl}>
        <li className={style.answerLi}>
          <AnswerMessaage
            title="질문"
            result={getAnswerForText(1, +questionID)}
          />
        </li>
        <li className={style.answerLi}>
          <AnswerMessaage title="연애" result={getAnswerForText(2, +loveID)} />
        </li>
        <li className={style.answerLi}>
          <AnswerMessaage title="음식" result={getAnswerForText(3, +foodID)} />
        </li>
      </ul>
    </div>
  );
};

export default Answer;
